// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
// Relative asset paths: the demo is published on a GitHub Pages sub-path, so nothing may start with "/".
import { defineConfig } from "astro/config";

export default defineConfig({
  build: { inlineStylesheets: "always", assetsPrefix: "." },
  compressHTML: true,
  vite: { build: { assetsInlineLimit: 8192 } },
});
