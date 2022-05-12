<template>
  <div class="container">
    <div id="map" class="map"></div>
  </div>
</template>
<script setup>
import {  onMounted } from 'vue'
onMounted(() => {
  const map = new AMap.Map('map', {
    resizeEnable: true,
    zoom: 7,
    center: [114.426986, 30.436675]
  })
})

</script>
<style scoped lang="less">
.container{
  height: calc(100vh - 142px);
  .map{
    height: 100%;
  }
}
</style>
