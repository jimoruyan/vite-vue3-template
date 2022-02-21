
<template>
  <div class="bread-crumbs-wrap">
    <el-breadcrumb :separator-icon="ArrowRight">
      <!-- <el-breadcrumb-item><img src="@/assets/img/home.png" alt=""></el-breadcrumb-item> -->
      <el-breadcrumb-item v-for="item in breadcrumbData" :key="item.name" :to="{path:item.path}">
        <span>{{ item.name }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ArrowRight } from '@element-plus/icons'
import {  onBeforeRouteUpdate } from 'vue-router'

const store = useStore()

const breadcrumbData = computed(() => store.state.app.breadCrumb)

onBeforeRouteUpdate(async(to) => {
  let breadCrumbList = []
  to.matched.forEach(item => {
    breadCrumbList.push({name: item.meta.title, path: item.path})
  })
  store.dispatch('setBreadCrumb', breadCrumbList)
})
</script>
<style lang="less" scoped>
.bread-crumbs-wrap{
  background: #fff;
  padding: 10px;
  .el-breadcrumb{
    .el-breadcrumb__item{

    }
  }
}
</style>
