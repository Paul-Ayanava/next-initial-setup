module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'prettier', 'import'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
    ecmaFeatures: {
      jsx: true  // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 1,
    'jest/expect-expect': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'linebreak-style': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/require-default-props': 'off'
      }
    }
  ]
  
}
