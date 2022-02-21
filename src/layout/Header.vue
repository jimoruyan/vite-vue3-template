<!--
 * @description: 头部组件
 * @author: wcy
 * @date: 2021-11-26
 -->
<template>
  <el-header height="56px">
    <div class="header_left">Vue3 + Element-Plus Create By Vite</div>
    <div class="header_right">
      <el-tooltip :content="isFullScreen ? '退出全屏' : '全屏'">
        <el-icon>
          <full-screen @click="handleFullScreen" />
        </el-icon>
      </el-tooltip>
      <el-dropdown size="medium" @command="handleCommand">
        <div class="user_info">
          <img class="user_avatar" src="@/assets/img/avatar.jpg">
          <span class="username">{{ userName }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- <el-dropdown-item command="user">个人中心</el-dropdown-item> -->
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
import { FullScreen } from '@element-plus/icons'
import { removeAuthed, removeToken} from '@/utils/auth'

const { proxy } = getCurrentInstance()
const router = useRouter()
const store = useStore()
const state = reactive({
  isFullScreen: false,
  screenfull
})
const userName = computed(() => store.getters.users.name)
const handleCommand = command => {
  if (command === 'user') {
    router.push('/user')
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
const handleFullScreen = () => {
  if (screenfull.isEnabled) {
    state.isFullScreen = !state.isFullScreen
    screenfull.toggle()
  }
}


</script>

<style lang="less" scoped>
.el-header {
    padding: 0 16px;
    border-bottom: 1px solid #ddd;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    .header_left {
        flex: 1;
        font-size: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .header_right {
        display: flex;
        align-items: center;
        padding-left: 8px;
        width: auto;
        & > i {
            padding: 8px 6px;
            font-size: 20px;
            cursor: pointer;
        }

        .user_info {
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
