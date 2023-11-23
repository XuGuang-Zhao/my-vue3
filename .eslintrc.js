module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential'
        // '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
              singleQuote: true, // 单引号
              semi: false, // 无分号
              printWidth: 80, // 每行宽度至多80字符
              trailingComma: 'none', // 不加对象|数组最后逗号
              endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 0,
        'eqeqeq': false,
        'vue/valid-template-root': false,
        'spaced-comment': false,
        'quotes': false,
        'eol-last': false,
        'key-spacing': false,
        'vue/valid-v-for': false,
        'vue/no-unused-vars': false,
        'vue/no-parsing-error': false,
        'vue/multi-word-component-names': 'off'
    }
}