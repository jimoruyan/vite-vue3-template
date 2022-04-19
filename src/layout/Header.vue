<!--
 * @description: 头部组件
 * @author: wcy
 * @date: 2021-11-26
 -->
<template>
  <el-header height="56px">
    <BreadCrumb class="header-left"/>
    <div class="header-right">
      <el-tooltip :content="state.isFullScreen ? '退出全屏' : '全屏'">
        <el-icon><full-screen @click="handleFullScreen"/></el-icon>
      </el-tooltip>
      <el-dropdown size="medium" @command="handleLang">
        <div class="lang-info">
          <SvgIcon name="lang" style="color:#fff;font-size:18px;"/>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh_CN">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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
import {  getCurrentInstance, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import screenfull from 'screenfull'
import { removeAuthed, removeToken } from '@/utils/auth'
import i18n from  '@/locales'
import { useI18n } from '@/hooks/web/usei18n'
import BreadCrumb from '@/components/BreadCrumb/index.vue'
const { proxy } = getCurrentInstance()
const router = useRouter()
const store = useStore()
const userName = store.getters.users.name

const state = reactive({
  isAsideMenu: true,
  isFullScreen: false,
  switchValue: 0,
  screenfull
})
const route = useRoute()
const { t } = useI18n()
// 语言切换
function handleLang(command) {
  i18n.global.locale = command
  document.title = t(route.meta.title) || ''
  store.dispatch('setLang', command)
}
// 用户操作
function handleCommand(command) {
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
// 全屏 切换
function handleFullScreen() {
  if (screenfull.isEnabled) {
    state.isFullScreen = !state.isFullScreen
    screenfull.toggle()
  }
}

</script>

<style lang="less" scoped>
.el-header {
  padding: 0 16px 0 0;
  border-bottom: 1px solid @borderColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: @mainColor;
  color: @textActiveColor;
  .header-left {
    flex: 1;
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
      color: @textActiveColor;
      cursor: pointer;
      .user_avatar {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
 
    }
    .lang-info{
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      .lang-svg{
        width:25px;
        height: 25px;
      }
    }
    span.username {
      margin-left: 8px;
      vertical-align: middle;
    }
  }
}

</style>
