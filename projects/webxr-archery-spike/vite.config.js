import { defineConfig } from "vite";

// Relative base supports deployment under a HTTPS subpath as well as at site root.
export default defineConfig({ base: "./" });
