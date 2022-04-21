<template>
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
</template>

<script setup>
import i18n from  '@/locales'
import { useAppStore } from '@/store/modules/app'
import { t } from '@/hooks/web/usei18n'
import { useRoute } from 'vue-router'
const appStore = useAppStore()
const route = useRoute()
// 语言切换
function handleLang(command) {
  i18n.global.locale = command
  document.title = t(route.meta.title) || ''
  appStore.setLang(command)
}
</script>
