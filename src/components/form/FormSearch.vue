<template>
  <div class="form-search">
    <el-form v-if="formItem && formItem.length > 0" :inline="true" :model="form" label-width="120px" label-position="right">
      <el-row>
        <el-col v-for="(item, index) in formItem" :key="index" :span="item.width">
          <el-form-item :key="index" :label="item.label" :prop="item.value" style="width:100%">
            <!-- 下拉 -->
            <el-select v-if="item.type === 'select'" v-model="form[item.value]" clearable>
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
            <!--日期-->
            <el-date-picker
              v-if="item.type === 'daterange'"
              v-model="form[item.value]"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="button-list">
      <el-button type="primary" @click="emit('searchForm', form)">查询</el-button>
      <el-button @click="clearData">重置</el-button>
    </div>
  </div>
</template>
<script setup>
import {  getCurrentInstance, reactive } from 'vue'
const { proxy } = getCurrentInstance()
defineProps({
  formItem: { // form查询项
    type: Array,
    default: () => []
  },
  formData: { // form查询数据
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['searchForm', 'clearForm'])
const form = reactive(JSON.parse(JSON.stringify(proxy.formData)))  // form查询数据

const clearData = () => { // 清空搜索栏
  Object.keys(form).map(key => { form[key] = '' })
  emit('clearForm')
}
</script>

<style scoped lang="less">
.form-search {
  height: 60px;
  display: flex;
  justify-content: end;
  .el-form {
    width: calc(100% - 200px);
    .el-form-item{
      margin-bottom: 10px;
      .el-select {
        width: 100%;
      }
      :deep(.el-date-editor){
        width: 100%;
        &.el-input__inner{
          height: 34px;
          margin-top: 2px;
        }
        .el-range-separator{
          line-height: 26px;
        }
      }
      .radio-group{
        line-height: 32px;
        text-align: center;
        .el-radio-button__inner{
          height:34px;
          line-height:34px;
          padding:0 20px;
        }
      }
    }
  }
  .button-list {
    width:200px;
    margin-top: 4px;
    text-align: right;
  }
}
</style>
