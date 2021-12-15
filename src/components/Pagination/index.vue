<template>
  <el-pagination
    v-model:current-page="state.currentPage"
    v-model:page-size="state.pageSize"
    background
    layout="sizes, prev, pager, next, jumper"
    :total="total"
    :hide-on-single-page="false"
    :pager-count="10"
    @current-change="currentChange"
  />
</template>

<script setup>
import { ref, reactive, watch, getCurrentInstance } from 'vue'

defineProps({
  queryData: { // 查询数据
    type: Object,
    default: () => { return { pageSize: 10, currentPage: 1 } }
  },
  total: {
    type: Number,
    default: () => 0
  }
})

const { proxy } = getCurrentInstance()

// 将table 组件传过来值设置成响应式 在上面使用v-model:进行绑定,在下方使用watch进行监听并传给父组件
const state = reactive({
  currentPage: proxy.queryData.currentPage,
  pageSize: proxy.queryData.pageSize
})

const emit = defineEmits(['pagination'])

watch(state, newVal => {
  emit('pagination', newVal)
})

</script>
