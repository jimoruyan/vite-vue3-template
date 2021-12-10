<!--
 * @description: 侧边栏菜单
 * @author: wcy
 * @date: 2021-11-26
 -->
<template>
  <el-aside :width="state.isCollapse ? `64px` : `200px`">
    <div class="logo">
      <img src="@/assets/img/avatar.jpg" alt="logo" draggable="false">
    </div>
    <el-menu
      background-color="#001529"
      text-color="#eee"
      active-text-color="#fff"
      router
      unique-opened
      :default-active="route.path"
      :collapse="state.isCollapse"
    >
      <div v-for="item in routers" :key="item.name">
        <div v-if="!item['hidden']">
          <el-sub-menu v-if="item.children && item.children.length" :index="concatPath(item.path)">
            <template #title>
              <i :class="item.meta.icon" />
              <el-icon :size="20">
                <component :is="item.meta.icon" />
              </el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
            <div v-for="sub in item.children" :key="sub.name">
              <el-menu-item :index="concatPath(item.path, sub.path)">
                <el-icon :size="20">
                  <component :is="sub.meta.icon" />
                </el-icon>
                <template #title>{{ sub.meta.title }}</template>
              </el-menu-item>
            </div>
          </el-sub-menu>
          <el-menu-item v-else :index="concatPath(item.path)">
            <el-icon :size="20">
              <component :is="item.meta.icon" />
            </el-icon>
            <template #title>{{ item.meta.title }}</template>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
    <div class="fold" @click="changeCollapse">
      <el-icon v-show="!state.isCollapse">
        <arrow-left-bold />
      </el-icon>
      <el-icon v-show="state.isCollapse">
        <arrow-right-bold />
      </el-icon>
    </div>
  </el-aside>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()
const state = reactive({ isCollapse: false })
const routers = computed(() => store.state.user.routers)

const changeCollapse = () => {
  state.isCollapse = !state.isCollapse
}

const concatPath = (p_path, c_path = '') => {
  return `${p_path !== '' ? '/' + p_path : '/'}${c_path !== '' ? '/' + c_path : ''}`
}

</script>

<style lang="less" scoped>
.noScrollBar {
  overflow: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}

.noSelect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.el-aside {
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  background-color: #001529;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  -moz-transition: width 0.3s ease-in-out;
  -webkit-transition: width 0.3s ease-in-out;
  .noSelect;
  .logo {
    height: 56px;
    line-height: 56px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    background-color: #002140;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #fff;
    }
    p {
      flex: 1;
      padding-left: 10px;
      height: 56px;
      font-size: 20px;
      color: #fff;
      overflow: hidden;
    }
  }
  .el-menu {
    flex: 1;
    border-right: none;
    .noScrollBar;
    &:not(.el-menu--collapse) {
      width: 200px;
    }
  }
  .fold {
    height: 48px;
    line-height: 48px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background-color: #002140;
    &:hover {
      cursor: pointer;
    }
  }
}
/* 激活选中菜单 */
.el-menu-item.is-active,
.el-menu--popup .el-menu-item.is-active {
  background-color: #1890ff !important;
}
</style>
