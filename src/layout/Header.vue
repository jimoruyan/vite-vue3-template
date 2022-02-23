<!--
 * @description: 头部组件
 * @author: wcy
 * @date: 2021-11-26
 -->
<template>
  <el-header height="56px">
    <div class="header-left">
      <el-menu
        v-show="!state.isAsideMenu"
        background-color="#001529"
        text-color="#eee"
        active-text-color="#fff"
        router
        mode="horizontal"
        :default-active="router.path"
      >
        <div v-for="item in routers" :key="item.name">
          <div v-if="!item['hidden']">
            <el-sub-menu v-if="item.children && item.children.length" :index="concatPath(item.path)">
              <template #title>
                <i :class="item.meta.icon"/>
                <el-icon :size="20">
                  <component :is="item.meta.icon"/>
                </el-icon>
                {{ item.meta.title }}
              </template>
              <div v-for="sub in item.children" :key="sub.name">
                <el-menu-item :index="concatPath(item.path, sub.path)">
                  <el-icon :size="20">
                    <component :is="sub.meta.icon"/>
                  </el-icon>
                  <template #title>{{ sub.meta.title }}</template>
                </el-menu-item>
              </div>
            </el-sub-menu>
            <el-menu-item v-else :index="concatPath(item.path)">
              <el-icon :size="20">
                <component :is="item.meta.icon"/>
              </el-icon>
              <template #title>{{ item.meta.title }}</template>
            </el-menu-item>
          </div>
        </div>
      </el-menu>
    </div>
    <div class="header-right">
      <el-tooltip :content="state.isAsideMenu ? '侧边菜单' : '顶部菜单'">
        <el-icon><expand @click="handleMenu"/></el-icon>
      </el-tooltip>
      <el-tooltip :content="state.isFullScreen ? '退出全屏' : '全屏'">
        <el-icon><full-screen @click="handleFullScreen"/></el-icon>
      </el-tooltip>
      <el-dropdown size="medium" @command="handleCommand">
        <div class="user-info">
          <img class="user_avatar" src="@/assets/img/avatar.jpg">
          <span class="username">{{ userName }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="user">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { computed, getCurrentInstance, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import screenfull from 'screenfull'
import { removeAuthed, removeToken } from '@/utils/auth'

const { proxy } = getCurrentInstance()
const router = useRouter()
const store = useStore()
const routers = computed(() => store.state.user.routers)
const userName = computed(() => store.getters.users.name)
const state = reactive({
  isAsideMenu: true,
  isFullScreen: false,
  screenfull
})
const handleCommand = command => {
  if (command === 'user') {
    console.log('user')
    // router.push('/user')
  } else {
    proxy.$message.success('退出成功')
    store.dispatch('clearUser')
    router.replace('/login')
    removeAuthed()
    removeToken()
    sessionStorage.clear()
    localStorage.clear()
  }
}
const concatPath = (p_path, c_path = '') => {
  return `${p_path !== '' ? '/' + p_path : '/'}${c_path !== '' ? '/' + c_path : ''}`
}
const handleFullScreen = () => {
  if (screenfull.isEnabled) {
    state.isFullScreen = !state.isFullScreen
    screenfull.toggle()
  }
}
const handleMenu = () => {
  state.isAsideMenu = !state.isAsideMenu
  store.dispatch('setAsideMenu', state.isAsideMenu)
}

</script>

<style lang="less" scoped>
.el-header {
  padding: 0 16px 0 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  .header-left {
    flex: 1;
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .el-menu{
      .el-sub-menu{
        /deep/ .el-sub-menu__title {
          .el-sub-menu__icon-arrow{
            margin-right: -20px;
          }
        }
      }
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    padding-left: 8px;
    width: auto;
    & > i {
      padding: 8px 6px;
      font-size: 20px;
      cursor: pointer;
    }

    .user-info {
      margin: 0 8px;
      width: auto;
      text-align: right;
      cursor: pointer;
      .user_avatar {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
    span.username {
      margin-left: 8px;
      vertical-align: middle;
      &:hover {
          color: #409eff;
      }
    }
  }
}

</style>
<style scoped lang="less">
.el-menu--horizontal{
  /* 激活选中菜单 */
  .el-menu-item.is-active,
  .el-menu--popup .el-menu-item.is-active {
    background-color: #1890ff !important;
  }
  /* hover菜单 */
  .el-menu-item:not(.is-disabled):hover{
    background-color: #1890ff;
  }
}
</style>
