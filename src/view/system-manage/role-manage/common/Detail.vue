<template>
  <div class="user-detail">
    <el-dialog
      v-model="state.dialogVisible"
      title="用户详情"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="800px"
      destroy-on-close
      custom-class="user-detail-dialog"
      @close="closeDialog()"
    >
      <Detail :detail-list="state.detailList" :detail-info="state.detailInfo"/>
    </el-dialog>
  </div>
</template>
<script setup>
import {  reactive  } from 'vue'
import Detail from '@/components/Detail/index.vue'
import { detailItem } from '../js/static-var'

const state = reactive({
  dialogVisible: false,
  detailList: detailItem,
  detailInfo: {}
})
const openDialog = (data) => {
  state.detailInfo = data
  state.dialogVisible = true
}
const closeDialog = () => {
  state.detailInfo = {}
  state.dialogVisible = false
}
defineExpose({
  openDialog, closeDialog
})

</script>
<style lang='less' scoped>
.user-detail {
  height: 100%;
  &-dialog{
    height: 550px;
  }
}
</style>
