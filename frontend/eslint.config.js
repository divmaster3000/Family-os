import js from "@eslint/js"
import tseslint from "typescript-eslint"
import importPlugin from "eslint-plugin-import"
import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"
import { fileURLToPath } from "node:url"
import path from "node:path"

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url))

const typedTsConfigs = tseslint.config(
  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
        tsconfigRootDir,
      },
    },
  },
  ...tseslint.configs.recommendedTypeChecked
)

export default [

  { ignores: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/.turbo/**"] },

  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
  },

  ...tseslint.configs.recommended,

  ...typedTsConfigs,

  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      eqeqeq: "error",
      "no-console": ["warn", { allow: ["error", "warn", "info"] }],
      "prefer-const": "error",
      "max-len": ["error", { code: 10, tabWidth: 2, ignoreUrls: true, ignoreStrings: true }],
    },
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,cts,mts}"],
    plugins: { import: importPlugin },
    rules: {
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "@/**", group: "internal" },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: { extensions: [".js", ".mjs", ".cjs", ".ts", ".tsx", ".cts", ".mts"] },
      },
    },
  },
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 100
        }
      ]
    }
  },

  prettierConfig,
]
