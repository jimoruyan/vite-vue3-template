<template>
  <div class="form-search">
    <div v-if="formItem && formItem.length > 0" class="search-table-header">
      <div>
        <el-form :inline="true" :model="form" label-width="120px" label-position="right">
          <el-row>
            <el-col v-for="(item, index) in formItem" :key="index" :span="item.width">
              <el-form-item
                :key="index"
                :label="item.label"
                :prop="item.value"
                style="width:100%"
              >
                <!-- 下拉 -->
                <el-select
                  v-if="item.type === 'select'"
                  v-model="form[item.value]"
                  clearable
                >
                  <el-option
                    v-for="(option,i) in item.children"
                    :key="i"
                    :value="option.value"
                    :label="option.label"
                  />
                </el-select>
                <!--文本-->
                <el-input
                  v-if="item.type === 'text'"
                  v-model="form[item.value]"
                  clearable
                  placeholder="请输入"
                />
              </el-form-item>
            </el-col>
            <div class="button-list">
              <el-button @click="emit('searchForm', form)">查询</el-button>
              <el-button @click="clearData">重置</el-button>
            </div>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import {  getCurrentInstance, ref, reactive} from 'vue'
const { proxy } = getCurrentInstance()
defineProps({
  formItem: { // 表格数据
    type: Array,
    default: () => []
  },
  formData: { // 表格数据
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['searchForm', 'clearForm'])

let form = reactive(JSON.parse(JSON.stringify(proxy.formData)))  // form查询数据

const clearData = () => { // 清空搜索栏
  Object.keys(form).map(key => { form[key] = '' })
  emit('clearForm')
}
</script>

<style scope lang="less">
.form-search{
  .el-select{
    width:100%;
  }
  .button-list{
    margin-left: 120px;
  }
}
</style>
