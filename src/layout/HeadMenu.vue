<!--
 * @description: 头部菜单
 * @author: wcy
 * @date: 2021-11-26
 -->
<template>
  <el-menu :default-active="route.path" router mode="horizontal">
    <div v-for="item in routers" :key="item.name">
      <el-sub-menu v-if="item.children && item.children.length" :index="concatPath(item.path)">
        <template #title>
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
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { useRoute } from 'vue-router'

const userStore = useUserStore()
const routers = computed(() => userStore.getRouters)
const route = useRoute()

function concatPath(p_path, c_path = '') {
  return `${p_path !== '' ? '/' + p_path : '/'}${c_path !== '' ? '/' + c_path : ''}`
}
</script>

<style lang="less" scoped>
.el-menu {
	border-right: none;
	overflow: hidden;
	scrollbar-width: none;
	background: @mainColor;
	border-bottom: none;
	flex: 2;
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
			:deep(.el-sub-menu__title) {
				color: @textActiveColor;
			}
		}
		:deep(.el-sub-menu__title) {
			color: @textColor;
			&:hover {
				color: @textActiveColor;
				background: @mainHoverColor;
			}
			.el-sub-menu__icon-arrow {
				right: 0px;
			}
		}
	}
}
</style>
<style lang="less">
.el-popper {
	.el-menu {
		--el-menu-bg-color: @mainColor;
	}
}
</style>
