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
    // Customize any rules you'd like to enforce here
    'vue/valid-v-slot': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'prettier/prettier': 'error', // This makes Prettier errors show as ESLint errors
  },
  plugins: ['prettier'],
};
