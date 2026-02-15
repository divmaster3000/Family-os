import tseslint from "typescript-eslint"

const tsconfigRootDir = new URL(".", import.meta.url).pathname

export default [
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
        tsconfigRootDir
      }
    }
  }
]