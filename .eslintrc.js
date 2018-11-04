module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'markdown',
    'html',
  ],
  env: {
    browser: true
  },
  rules: {
    // dæmi verða læsilegri ef þau eru ekki með löngum línum
    'max-len': ['error', { code: 80, ignoreUrls: true }],

    // console.log mikið notað í dæmum
    'no-console': 0,

    // leyfa i++ í for
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],

    'function-paren-newline': ["error", "consistent"]
  }
};
