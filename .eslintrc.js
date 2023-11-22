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