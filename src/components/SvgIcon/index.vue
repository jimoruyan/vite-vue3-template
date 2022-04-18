<template>
  <!-- 展示内部图标 -->
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
 
<script setup>
import { defineProps, computed } from 'vue'
 
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})
 
// 内部图标
const iconName = computed(() => `#icon-${props.icon}`)
const modulesFiles = import.meta.globEager(`./icons/${props.icon}.svg`)
console.log(`./icons/${props.icon}.svg`, modulesFiles)

</script>
 
<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
 
.svg-external-icon {
  mask-size: cover !important;
  display: inline-block;
  background-color: currentColor;
}
</style>
