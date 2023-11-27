<script setup>
import day9 from './views/day9.vue';
import {ref, onMounted} from 'vue'

const child = ref(null)
onMounted(() => {
  console.log('child data', child.value.a)
})

</script>

<template>

</template>