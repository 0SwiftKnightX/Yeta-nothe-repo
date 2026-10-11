"""Tests for the OTECM schema and sample record."""

import json
import unittest
from pathlib import Path

from jsonschema import Draft202012Validator, FormatChecker

ROOT = Path(__file__).resolve().parents[1]
SCHEMA_PATH = ROOT / "schemas" / "otecm.schema.json"
SAMPLE_PATH = ROOT / "examples" / "otecm" / "sample-record.json"


class OTECMTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
        cls.sample = json.loads(SAMPLE_PATH.read_text(encoding="utf-8"))
        Draft202012Validator.check_schema(cls.schema)
        cls.validator = Draft202012Validator(cls.schema, format_checker=FormatChecker())

    def test_sample_record_is_valid(self):
        self.assertEqual([], list(self.validator.iter_errors(self.sample)))

    def test_invalid_status_is_rejected(self):
        record = dict(self.sample)
        record["status"] = "VERIFIED"
        self.assertTrue(list(self.validator.iter_errors(record)))

    def test_unknowns_are_not_silently_promoted(self):
        self.assertEqual("UNKNOWN", self.sample["status"])
        self.assertEqual("NOT_RUN", self.sample["verification"][0]["status"])
        self.assertEqual([], self.sample["evidence"]["sources"])


if __name__ == "__main__":
    unittest.main()
