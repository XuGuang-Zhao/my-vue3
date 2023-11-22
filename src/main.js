import { createApp } from 'vue'
import App from './App.vue'


/*
 1.createApp：
 用法：用于构建新实例
 参数：组件
 2.mount: 
 用法：新实例调用mount()方法后才会渲染出来
 参数：DOM元素或者CSS选择器
*/
createApp(App).mount('#app')
