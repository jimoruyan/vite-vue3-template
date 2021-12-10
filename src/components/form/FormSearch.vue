<template>
  <div class="form-search">
    <div v-if="formItem && formItem.length > 0" class="search-table-header">
      <div>
        <el-form :model="formData" label-position="right">
          <el-row>
            <el-col v-for="(item, index) in formItem" :key="index" :span="item.width">
              <el-form-item
                :key="index"
                :label="item.label"
                :prop="item.value"
              >
                <!-- 下拉 -->
                <el-select
                  v-if="item.type === 'select'"
                  :value="formData[item.value]"
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
                  :value="formData[item.value]"
                  clearable
                  :placeholder="`请输入${item.placeholder || ''}`"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <!-- 按钮 -->
        <div>
          <el-button>查询</el-button>
          <el-button>重置</el-button>
          <el-button>
            <i v-if="formButton === '展开'" class="el-icon-arrow-down" />
            <i v-if="formButton === '收起'" class="el-icon-arrow-up" />
          </el-button>
        </div>
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
  }
  // formData: { // 表格数据
  //   type: Object,
  //   default: () => {}
  // }
})
let formData = reactive({name: '1', age: '1', classes: '1'})
console.log(proxy.formData, 123)
</script>

