#!/usr/bin/env python3
"""Validate OTECM JSON records against the Draft 2020-12 schema."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from jsonschema import Draft202012Validator, FormatChecker


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as stream:
        return json.load(stream)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("schema", type=Path, help="Path to the OTECM JSON Schema")
    parser.add_argument("records", nargs="+", type=Path, help="One or more JSON record files")
    args = parser.parse_args()

    try:
        schema = load_json(args.schema)
        Draft202012Validator.check_schema(schema)
    except Exception as exc:  # Report malformed JSON or invalid schema cleanly.
        print(f"SCHEMA ERROR: {exc}", file=sys.stderr)
        return 2

    validator = Draft202012Validator(schema, format_checker=FormatChecker())
    failed = False
    for record_path in args.records:
        try:
            record = load_json(record_path)
        except Exception as exc:
            print(f"INVALID JSON: {record_path}: {exc}", file=sys.stderr)
            failed = True
            continue

        errors = sorted(validator.iter_errors(record), key=lambda error: list(map(str, error.absolute_path)))
        if errors:
            failed = True
            for error in errors:
                location = "/" + "/".join(str(part) for part in error.absolute_path)
                print(f"FAIL: {record_path}{location}: {error.message}", file=sys.stderr)
        else:
            print(f"PASS: {record_path}")

    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
