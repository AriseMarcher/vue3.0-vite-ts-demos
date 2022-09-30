module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'standard-with-typescript'
  ],
  parser: 'vue-eslint-parser',
  overrides: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ["vite.config.ts", '.eslintrc.cjs'],
  plugins: [
    'vue'
  ],
  rules: {
  }
}
