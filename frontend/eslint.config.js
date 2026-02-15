import tseslint from "typescript-eslint"
import prettierPlugin from 'eslint-config-prettier';


const tsconfigRootDir = new URL(".", import.meta.url).pathname

export default [
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    rules: { 
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'eqeqeq': 'error',
      'no-console': ['warn', { allow: ['error', 'warn', 'info'] }], 
      'prefer-const': 'error',
    },
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
        tsconfigRootDir
      }
    }
  },
  {
    plugins: ['import'],
    rules: {
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'pathGroups': [
            {
              'pattern': 'react',
              'group': 'external',
              'position': 'before'
            },
            {
              'pattern': '@/**', 
              'group': 'internal'
            }
          ],
          'pathGroupsExcludedImportTypes': ['react'],
          'newlines-between': 'always', 
          'alphabetize': {
            'order': 'asc', 
            'caseInsensitive': true
          }
        }
      ]
    },
    settings: {
      'import/resolver': {
        'node': {
          'extensions': ['.js', '.jsx', '.ts', '.tsx']
        },
      }
    }
  },
  prettierPlugin,
  {
    ignores: ["node_modules/", "dist/"]
  }
]