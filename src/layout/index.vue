<!--
 * @description: 布局组件
 * @author: wcy
 * @date: 2021-11-26
 -->
<template>
  <el-container class="layout">
    <Aside/>
    <el-container>
      <Header/>
      <div class="app-wrap">
        <el-main>
          <router-view/>
        </el-main>
        <!-- <el-footer>
          Vue3 + Element-Plus Create By Vite
        </el-footer> -->
      </div>
    </el-container>
  </el-container>
</template>
<script setup>
import Aside from './Aside.vue'
import Header from './Header.vue'

</script>
<style lang="less" scoped>
.layout {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .el-container {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .app-wrap {
      flex: 1;
      height: auto;
      background-color: #f3f6f8;
      overflow: hidden;
      overflow-y: auto;
      .el-main {
        padding: 16px;
        min-height: calc(100vh - 139px);
        height: auto;
      }
      .el-footer {
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
        overflow: hidden;
        user-select: none;
      }
    }
  }
}
</style>
