<script>
export default {
  data() {
    return {
      isDisable: false,
      attrArr: {
        id: '1',
        class: 'wrapper'
      }
    }
  }
}
</script>

<template>
  <!-- 属性绑定，如果绑定的值为undefined或者null则移除 -->
  <div v-bind:id="dynamicId">单个属性绑定</div>
  <!-- 简写 -->
  <div :id="dynamicId">简写属性绑定</div>
  <!-- 组件上布尔型属性会根据true/false决定属性的显隐 -->
  <button :disabled="isDisable">按钮布尔属性</button>
  <!-- 动态绑定多个值 -->
  <div v-bind="attrArr">多值属性绑定</div>
</template>
