<script setup>
import {ref} from 'vue'
// 响应式基础Ref
const dynamicId = ref(1)

</script>

<template>
  <div v-bind:id="dynamicId"></div>
  <div :id="dynamicId"></div>
  <button @click="dynamicId++"></button>
</template>
