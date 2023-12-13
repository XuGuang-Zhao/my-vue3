export default {
    install: (app, options) => {
        // 在这里编写插件代码
        app.provide('i18n', options)
        app.config.globalProperties.$translate = (key) => {
            return key.split('.').reduce((o, i) => {
                if (o) return o[i]
            }, options)
        }
    }
}