<!--
 * @description: 侧边栏菜单
 * @author: wcy
 * @date: 2021-11-26
 -->
<template>
  <el-aside :class="state.isCollapse ? `width64` : `width200`">
    <div class="logo">
      <img src="@/assets/img/avatar.jpg" alt="logo" draggable="false" />
    </div>
    <el-menu router unique-opened :default-active="route.path" :collapse="state.isCollapse">
      <div v-for="item in routers" :key="item.name">
        <div v-if="!item['hidden']">
          <el-sub-menu v-if="item.children && item.children.length" :index="concatPath(item.path)">
            <template #title>
              <i :class="item.meta.icon" />
              <el-icon :size="20">
                <component :is="item.meta.icon" />
              </el-icon>
              <span>{{ $t(item.meta.title) }}</span>
            </template>
            <div v-for="sub in item.children" :key="sub.name">
              <el-menu-item :index="concatPath(item.path, sub.path)">
                <el-icon :size="20">
                  <component :is="sub.meta.icon" />
                </el-icon>
                <template #title>{{ $t(sub.meta.title) }}</template>
              </el-menu-item>
            </div>
          </el-sub-menu>
          <el-menu-item v-else :index="concatPath(item.path)">
            <el-icon :size="20">
              <component :is="item.meta.icon" />
            </el-icon>
            <template #title>{{ $t(item.meta.title) }}</template>
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
import { useUserStore } from '@/store/modules/user'

const route = useRoute()
const userStore = useUserStore()
const state = reactive({ isCollapse: false })
const routers = computed(() => userStore.getRouters)
const changeCollapse = () => {
  state.isCollapse = !state.isCollapse
}

const concatPath = (p_path, c_path = '') => {
  return `${p_path !== '' ? '/' + p_path : '/'}${c_path !== '' ? '/' + c_path : ''}`
}
</script>

<style lang="less" scoped>
  .width64 {
    width: 64px;
  }
  .width200 {
    width: 200px;
  }
  .el-aside {
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: @mainColor;
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    user-select: none;
    .logo {
      height: 56px;
      line-height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: @mainColor;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin: 0 10px;
      }
      p {
        color: @textColor;
        font-size: 22px;
        white-space: nowrap;
      }
    }
    .el-menu {
      flex: 1;
      border-right: none;
      overflow: hidden;
      overflow-y: scroll;
      scrollbar-width: none;
      background: @mainColor;
      .el-menu-item,
      .el-sub-menu {
        background: @mainColor;
        color: @textColor;
        &:hover {
          color: @textActiveColor;
          background: @mainHoverColor;
        }
        &.is-active {
          color: @textActiveColor;
          background-color: @mainActiveColor;
        }
        :deep(.el-sub-menu__title) {
          color: @textColor;
          &:hover {
            color: @textActiveColor;
            background: @mainHoverColor;
          }
        }
      }

      &::-webkit-scrollbar {
        width: 0;
      }
      &:not(.el-menu--collapse) {
        width: 200px;
      }
    }
    .fold {
      height: 48px;
      line-height: 48px;
      color: @textColor;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      background-color: @mainColor;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
<style lang="less">
  .el-aside {
    .el-menu--collapse {
      // 收起样式
      .el-sub-menu__title {
        .el-sub-menu__icon-arrow {
          display: none;
        }
        span {
          display: none;
        }
      }
    }
  }
</style>
