module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'flowtype-errors',
    'flowtype',
    'sort-imports-es6-autofix',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    chrome: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    // 'sort-imports': ['error', {
    //   ignoreCase: false,
    //   ignoreDeclarationSort: false,
    //   ignoreMemberSort: false,
    //   memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    // }],
    'sort-imports-es6-autofix/sort-imports-es6': ['error', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],
  },
}
