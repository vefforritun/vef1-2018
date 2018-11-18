module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true
  },
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'class-methods-use-this': 0,

    // höfum ekki node_modules installað fyrir dæmi
    'import/no-unresolved': 0,
  },
  plugins: ['import'],
};
