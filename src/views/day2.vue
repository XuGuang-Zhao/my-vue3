<script setup>
import { ref, reactive } from 'vue'
// 1.声明count响应式变量
const count = ref(0)
console.log('count', count, 'value', count.value)
// 2.改变变量值
const addCount = () => {
    count.value++
}
// 3.Ref可以深层响应，监听数组和对象的变化
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})
console.log('old obj', obj.value)
const changeObj = () => {
    obj.value.nested.count++
    obj.value.arr.push('baz')
    console.log('new obj', obj.value)
}

// 4. Reactive只能作用于对象类型，不能作用于简单类型
const obj2 = reactive({
    name: 'zxg',
    age: 18
}) 
// 5. Reactive 不能替换整个对象，会导致属性丢失

// 6. 解包
const object = { id: ref(222) }
const {id} = object

</script>

<template>
  <div>Count值: {{ count }}</div>
  <el-button @click="addCount">增加Count</el-button>
  <el-button @click="changeObj">改变Obj</el-button>
  <div>{{ id + 1 }}</div>
</template>
