import { defineConfig } from "tsup";
import fs from "node:fs";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: {
    compilerOptions: {
      ignoreDeprecations: "6.0",
    },
  },
  clean: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
  async onSuccess() {
    fs.cpSync("src/styles", "dist/styles", { recursive: true });
    fs.copyFileSync("src/styles/styles.css", "dist/styles.css");
    fs.copyFileSync("src/styles/preset.css", "dist/preset.css");
    fs.cpSync("src/styles/themes", "dist/themes", { recursive: true });
  },
});
