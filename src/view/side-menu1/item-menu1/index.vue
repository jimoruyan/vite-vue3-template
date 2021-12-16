<template>
  <div class="container">
    <FormSearch :form-item="formItem" :form-data="formData" @searchForm="getList" @clearForm="clearForm" />
    <Table
      :table-head="tableHead"
      :table-data="tableData"
      :operation="['view','edit','del']"
      :selection="true"
      :setting="true"
      :radio="true"
      :total="8000"
      :list-loading="listLoading"
      table-height="calc(100vh - 240px)"
      @handleView="handleView"
      @handleEdit="handleEdit"
      @handleDelete="handleDelete"
      @onSelectAll="onSelectAll"
      @handleSelectionChange="handleSelectionChange"
      @paginationChange="paginationChange"
    />
  </div>
</template>
<script setup>
import { todos, posts } from '@/api/menu1.js'
import {ref, reactive, provide, getCurrentInstance} from 'vue'
import Table from '@/components/Table/BaseTable.vue'
import FormSearch from '@/components/Form/FormSearch.vue'
const formItem = [
  {
    label: '姓名',
    value: 'name',
    width: 6,
    type: 'text'
  },
  {
    label: '年龄',
    value: 'age',
    width: 6,
    type: 'text'
  },
  {
    label: '年级',
    value: 'classes',
    width: 6,
    type: 'select',
    children: [
      {
        label: '一年级',
        value: '1'
      },
      {
        label: '二年级',
        value: '2'
      },
      {
        label: '三年级',
        value: '3'
      },
      {
        label: '四年级',
        value: '4'
      },
      {
        label: '五年级',
        value: '5'
      },
      {
        label: '六年级',
        value: '6'
      }
    ]
  }
]
const formData = reactive({name: '', age: '', classes: ''})

const tableHead = [
  {
    prop: 'index',
    label: '序号'
  },
  {
    prop: 'name',
    label: '姓名'
  },
  {
    prop: 'age',
    label: '年龄'
  }
]
const {proxy} = getCurrentInstance()

let listLoading = ref(true)
const tableData = reactive([])
for (let i = 0; i < 100; i++) {
  tableData.push({
    index: i + 1,
    name: `wcy${i + 1}`,
    age: 18
  })
  console.log(tableData)
}
setTimeout(() => {
  proxy.listLoading = false
}, 1000)
const handleView = row => {
  console.log('查看', row)
}
const handleEdit = row => {
  console.log('编辑', row)
}
const handleDelete = row => {
  console.log('删除', row)
}
const handleSelectionChange = val => {
  console.log('选择', val)
}
const onSelectAll = val => {
  console.log('全选', val)
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
// todos().then(res => {
// })
// posts().then(res => {
//   state.lists = res
// })
</script>
<style scoped lang="less">
.container{

}
</style>
