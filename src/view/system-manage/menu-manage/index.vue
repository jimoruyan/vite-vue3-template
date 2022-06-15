<template>
  <div class="menu-manage">
    <FormSearch :form-item="formItem" :form-data="formData" @searchForm="getList" @clearForm="clearForm"/>
    <div class="btn-list">
      <el-button type="primary" icon="Plus" @click="addClue">新增</el-button>
    </div>
    <Table
      :table-head="tableHead"
      :table-data="tableData"
      :operation="['view','edit','del']"
      :total="8000"
      :list-loading="listLoading"
      style="height:calc(100vh - 250px);"
      @handleView="handleView"
      @handleEdit="handleEdit"
      @handleDelete="handleDelete"
      @paginationChange="paginationChange"
    />
    <AddForm ref="AddFormRef"/>
    <Detail ref="DetailRef"/>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { formItem, tableHead } from './js/static-var'
import { ElMessage, ElMessageBox } from 'element-plus'
import Table from '@/components/Table/BaseTable.vue'
import AddForm from './common/AddForm.vue'
import FormSearch from '@/components/Form/FormSearch.vue'
import Detail from './common//Detail.vue'

const formData = reactive({ name: '', age: '', classes: '' })
const AddFormRef = ref(null)
const DetailRef = ref(null)

const listLoading = ref(true)
const tableData = reactive([])

setTimeout(() => {
  for (let i = 0; i < 20; i++) {
    tableData.push({
      index: i + 1,
      menuName: `菜单名称`,
      munuPath: '/home',
      munuIcon: 'icon',
      remarks: '这个一个主页',
      createTime: '2022-5-31 09:30:00',
      creatorName: 'admin'
    })
  }
  listLoading.value = false
}, 200)
function addClue() {
  AddFormRef.value.open()
}
function handleView(row) {
  DetailRef.value.openDialog(row)
  console.log('查看', row)
}
function handleEdit(row) {
  AddFormRef.value.open(row)
  console.log('编辑', row)
}
function handleDelete(row) {
  console.log('删除', row)
  ElMessageBox({
    title: '提示',
    message: '确定要删除吗?',
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    callback: (action) => {
      if (action === 'confirm') {
        ElMessage.success('删除成功')
      }
    }
  })
}
function getList(val) {
  console.log('查询数据', val)
}
function clearForm() {
  console.log('清除数据')
}
function paginationChange(data) {
  console.log('页码变化', data)
}
</script>
<style scoped lang="less">
.menu-manage{
  .btn-list{
    margin-bottom: 10px;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
