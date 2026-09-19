import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import tailwindcss from "eslint-plugin-tailwindcss";
import globals from "globals";
import path from "node:path";
import tseslint from "typescript-eslint";

const rootDir = import.meta.dirname;
const cwd = process.cwd();
const isUi = cwd.endsWith("packages/ui");

const tailwindFiles = isUi
  ? ["**/*.{ts,tsx}"]
  : ["packages/ui/**/*.{ts,tsx}", "**/packages/ui/**/*.{ts,tsx}"];

export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.turbo/**",
      "**/coverage/**",
      "**/build/**",
      "**/.output/**",
      "**/*.d.ts",
      "**/tsup.config.bundled*",
    ],
  },
  {
    // Scope tailwindcss rules strictly to packages with Tailwind CSS
    ...tailwindcss.configs.recommended,
    files: tailwindFiles,
    rules: {
      ...tailwindcss.configs.recommended.rules,
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        cssConfigPath: path.resolve(rootDir, "packages/tokens/src/styles.css"),
      },
    },
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      /**
       * Hard 250-line rule per file.
       */
      "max-lines": [
        "error",
        {
          max: 250,
          skipComments: true,
          skipBlankLines: true,
        },
      ],
      /**
       * Maximum line length rule (100 characters).
       */
      "max-len": [
        "warn",
        {
          code: 100,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "tailwindcss/no-custom-classname": "off",
    },
  },
  {
    files: ["packages/cli/**/*.{ts,tsx}"],
    rules: {
      "no-console": "off",
    },
  },
  eslintPluginPrettier,
);
