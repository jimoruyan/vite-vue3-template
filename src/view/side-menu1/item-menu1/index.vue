<template>
  <div>
    <div>side-menu1-item-menu1</div>
    <Table
      :table-head="tableHead"
      :table-data="tableData"
      :operation="['view','edit','del']"
      :selection="true"
      :setting="true"
      :radio="true"
      @handleView="handleView"
      @handleEdit="handleEdit"
      @handleDelete="handleDelete"
      @onSelectAll="onSelectAll"
      @handleSelectionChange="handleSelectionChange"
    />
    <div v-for="item in state.lists" :key="item.id">
      <div>{{ item.userId }}</div>
      <div>{{ item.id }}</div>
      <div>{{ item.title }}</div>
      <div>{{ item.body }}</div>
    </div>
  </div>
</template>
<script setup>
import { todos, posts } from '@/api/menu1.js'
import { reactive, provide} from 'vue'
import Table from '@/components/table/BaseTable.vue'  // 引入子组件
// provide('table', '1111')
const state = reactive({
  list: []
})
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
const tableData = [
  {
    index: 1,
    name: 'wcy',
    age: 18
  }, {
    index: 1,
    name: 'wcy',
    age: 18
  }, {
    index: 1,
    name: 'wcy',
    age: 18
  }, {
    index: 1,
    name: 'wcy',
    age: 18
  }
]
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

// todos().then(res => {
// })
// posts().then(res => {
//   state.lists = res
// })
</script>
