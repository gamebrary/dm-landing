module.exports = {
  root: true,
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/valid-v-slot': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'prettier/prettier': 'error', // This makes Prettier errors show as ESLint errors
  },
  plugins: ['prettier'],
};
