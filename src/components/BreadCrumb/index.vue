<template>
  <div class="bread-crumbs-wrap">
    <el-breadcrumb :separator-icon="ArrowRight">
      <!-- <el-breadcrumb-item><img src="@/assets/img/home.png" alt=""></el-breadcrumb-item> -->
      <el-breadcrumb-item v-for="item in breadcrumbData" :key="item.name" :to="{ path: item.path }">
        <span>{{ $t(item.name) }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { ArrowRight } from '@element-plus/icons'
import { useAppStore } from '@/store/modules/app'

const userStore = useAppStore()
const breadcrumbData = computed(() => userStore.getBreadCrumb)
</script>
<style lang="less" scoped>
.bread-crumbs-wrap {
  background: @mainColor;
  padding: 10px;
  :deep(.el-breadcrumb) {
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        color: @textColor;
      }
      &:not(:last-child):hover {
        .el-breadcrumb__inner {
          color: @textActiveColor;
        }
      }
    }
  }
}
</style>
