<template>
  <div class="container">
    <FormSearch :form-item="formItem" :form-data="formData" @searchForm="getList" @clearForm="clearForm"/>
    <div class="btn-list">
      <el-button @click="addClue" type="primary">新增</el-button>
    </div>
    <Table
      :table-head="tableHead"
      :table-data="tableData"
      :operation="['view','edit','del']"
      :total="8000"
      :list-loading="listLoading"
      style="height:calc(100vh - 320px);"
      @handleView="handleView"
      @handleEdit="handleEdit"
      @handleDelete="handleDelete"
      @paginationChange="paginationChange"
    />
    <AddForm ref="AddFormRef"/>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import Table from '@/components/Table/BaseTable.vue'
import AddForm from './components/AddForm.vue'
import FormSearch from '@/components/Form/FormSearch.vue'
import { formItem, tableHead } from './js/static-var'

const formData = reactive({ name: '', age: '', classes: '' })
const AddFormRef = ref(null)

const listLoading = ref(true)
const tableData = reactive([])

setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    tableData.push({
      index: i + 1,
      name: `wcy${i + 1}`,
      age: 18
    })
  }
  listLoading.value = false
}, 1000)
const addClue = () => {
  AddFormRef.value.open()
}
const handleView = row => {
  console.log('查看', row)
}
const handleEdit = row => {
  AddFormRef.value.open()
  console.log('编辑', row)
}
const handleDelete = row => {
  console.log('删除', row)
}
const getList = val => {
  console.log('查询数据', val)
}
const clearForm = () => {
  console.log('清除数据')
}
const paginationChange = data => {
  console.log('页码变化', data)
}
</script>
<style scoped lang="less">
.container{
  .btn-list{
    margin-bottom: 10px;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
