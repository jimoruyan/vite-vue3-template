<template>
  <el-table
    v-bind="$attrs"
    ref="tableDom"
    v-loading="listLoading"
    :data="tableData"
    stripe
    height="100%"
    @selection-change="handleSelectionChange"
    @select-all="onSelectAll"
  >
    <el-table-column v-if="selection" type="selection" width="60"/>
    <el-table-column
      v-for="item in tableHead"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      show-overflow-tooltip
    />
    <el-table-column v-if="operation.length" label="操作" :width="operation.length && operation.length * 23 + 55">
      <template v-if="setting" #header>
        <div class="col-setting">
          <span>操作</span>
          <img src="@/assets/img/table/setting.png" title="设置" alt="设置" @click="openDialog">
        </div>
      </template>
      <template #default="scope">
        <div class="handle">
          <img v-if="operation.indexOf('view') > -1" src="@/assets/img/table/check.png" class="view" title="查看" alt="查看" @click="emit('handleView', scope.row)">
          <img v-if="operation.indexOf('edit') > -1" src="@/assets/img/table/edit.png" class="edit" title="编辑" alt="编辑" @click="emit('handleEdit', scope.row)">
          <img v-if="operation.indexOf('del') > -1" src="@/assets/img/table/delete.png" class="del" title="删除" alt="删除" @click="emit('handleDelete', scope.row)">
        </div>
      </template>
    </el-table-column>
  </el-table>
  <Pagination :total="total" @pagination="pagination"/>
</template>
<script setup>
import {  getCurrentInstance, ref } from 'vue'
import Pagination from '@/components/Pagination/index.vue'

const { proxy } = getCurrentInstance()

const emit = defineEmits(['handleView', 'handleEdit', 'handleDelete', 'handleSelectionChange', 'onSelectAll', 'paginationChange'])

defineProps({
  tableData: { // 表格数据
    type: Array,
    default: () => []
  },
  tableHead: { // 表头
    type: Array,
    default: () => []
  },
  tableHeight: { // 表格高度
    type: String,
    default: () => '100%'
  },
  formselect: { // 查询条件
    type: Object,
    default() {
      return { pageSize: 1, pageNum: 5 }
    }
  },
  total: { // 翻页条件
    type: Number,
    default: () => 0
  },
  listLoading: { // 加载
    type: Boolean,
    default: () => false
  },
  operation: { // 需要哪些操作按钮
    type: Array,
    default: () => []
  },
  selection: { // 全选
    type: Boolean,
    default: () => false
  },
  index: { // 序号
    type: Boolean,
    default: () => false
  },
  radio: { // 单选
    type: Boolean,
    default: () => false
  },
  setting: { // 表头配置
    type: Boolean,
    default: () => false
  },
  selectAll: { // 表头配置
    type: Boolean,
    default: () => false
  },
  tableRowClassName: {
    type: Function,
    default: () => null
  },
  isHighlight: { // 是否需要点击高亮当行
    type: Boolean,
    default: () => false
  }
})

const tableDom = ref()
// 选择内容变化
const handleSelectionChange = (val) => {
  // 如果radio为true，则当前表格为单选表格
  if (proxy.radio === true && val.length > 1) {
    tableDom.value.clearSelection()
    tableDom.value.toggleRowSelection(val.pop())
  } else {
    emit('handleSelectionChange', val)
  }
}
// 全选
const onSelectAll = () => {
  if (proxy.radio === true) {
    tableDom.value.clearSelection()
  } else {
    emit('onSelectAll')
  }
}

// 设置
const openDialog = () => console.log('设置')
// 翻页
const pagination = data => emit('paginationChange', data)

</script>
<style lang="less">
  .el-table{
    .cell{
      line-height:40px;
    }
  }
  .col-setting{
    display: flex;
    justify-content: space-between;
    img{
      cursor: pointer;
      width: 16px;
      height: 15px;
      margin-top: 3px;
    }
  }
  .handle {
    display: flex;
    justify-content: flex-start;
    img {
      margin-right: 10px;
      vertical-align: middle;
      width: 19px;
      height: 18px;
      cursor: pointer;
    }
    .view {
      width: 19px;
      height: 14px;
    }
    .edit {
      width: 15px;
      height: 17px;
    }
  }
</style>
