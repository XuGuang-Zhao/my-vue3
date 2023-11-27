<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const name = ref('')
const res1 = ref('No, not right')

const x = ref(1)
const y = ref(2)
const res2 = ref(x.value + y.value)


// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

watch(name, (newValue) => {
    if (newValue === 'anthony') {
        res1.value = 'Yes! I am here'
    }
})

// getter 函数
watch(
  () => Number(x.value) + Number(y.value),
  (sum) => {
    console.log('sum', sum)
    res2.value = sum
  }
)


</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>

  <el-input placeholder="Type My name" v-model.trim="name"></el-input>
  <p>Res1: {{ res1  }}</p>
  
  <p>x is: {{ x }}, y is {{ y }}</p>
  <p> Res2: {{ res2 }} </p>
  <el-input type="number" v-model="x"></el-input>
  <el-input type="number" v-model="y"></el-input>


</template>