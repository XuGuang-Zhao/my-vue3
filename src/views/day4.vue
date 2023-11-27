<script setup>
import { ref, computed } from 'vue'
const isActive = ref(true)
const isError = ref(false)
const staticColor = ref(false)
const classObject = computed(() => ({
    'color': staticColor.value,
    'text-change': isActive.value
}))
const activeClass = ref('active')
const errorClass = ref('text-danger')

</script>

<template>
    <!-- :class属性和class属性可以共存 -->
    <div class="static" :class="{ active: isActive, 'text-danger': isError }">class属性</div>
    <!-- class对象属性 -->
    <div :class="classObject">class对象</div>
    <!-- class数组属性 -->
    <div :class="[activeClass, errorClass]">class数组</div>
    <!-- class中使用三元表达式 -->
    <div :class="[isActive ? activeClass : '', errorClass]">class三元</div>
    <!-- class数组中使用对象 -->
    <div :class="[{activeClass: isActive}, errorClass]">class数组嵌套对象</div>
</template>