
module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: ['plugin:vue/recommended', './.eslintrc-common.js'],
    globals: {
      ht: true
    },
    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
      "vue/max-attributes-per-line": [2, {
        "singleline": 10,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }],
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline":"off",
      "vue/name-property-casing": ["error", "PascalCase"],
      "vue/no-v-html": "off",
      'accessor-pairs': 2,
      'arrow-spacing': [2, {
        'before': true,
        'after': true
      }],
      'block-spacing': [2, 'always'],
      'brace-style': [2, '1tbs', {
        'allowSingleLine': true
      }]
    }
  }
  