<template>
  <div class="form">
    <div v-if="formItem && formItem.length > 0 && dialogVisible">
      <el-form ref="commonForm" size="small" :rules="rules" :model="form" :inline="true" label-position="left" v-bind="{ 'label-width': labelWidth }">
        <el-row>
          <el-col v-for="(item, index) in formItem" :key="index" :span="item.width">
            <el-form-item :key="index" class="table-header-item" :label="item.label" :prop="item.value">
              <!-- 下拉框 -->
              <el-select
                v-if="item.type === 'select'"
                v-model="form[item.value]"
                clearable
                :filterable="item.filterable ? item.filterable : false"
                :multiple="item.multiple ? item.multiple : false"
                :disabled="item.disabled"
                :placeholder="`请选择${item.placeholder || ''}`"
                @change="emit('change', form, item.value)"
              >
                <el-option v-for="(option, i) in item.children" :key="i" :value="option.value" :label="option.label" />
              </el-select>
              <!--文本框-->
              <el-input
                v-if="item.type === 'text'"
                :id="item.value"
                v-model.trim="form[item.value]"
                clearable
                :placeholder="item.disabled === true ? '' : `请输入${item.placeholder || ''}`"
                :maxlength="item.maxlength"
                :oninput="emit('oninput', item)"
                :disabled="item.disabled"
                @change="emit('change', form, item.value)"
              />
              <!-- 密码框 -->
              <el-input
                v-if="item.type === 'password'"
                v-model="form[item.value]"
                type="password"
                :placeholder="item.placeholder ? item.placeholder : '请输入'"
                show-password
                :disabled="item.disabled"
              />
              <!-- 内置弹窗 -->
              <div v-if="item.type === 'inputBtn'" class="input-button">
                <el-input
                  :id="item.value"
                  v-model.trim="form[item.value]"
                  class="input-button-left"
                  :placeholder="item.disabled === true ? '' : `请选择${item.placeholder || ''}`"
                  :oninput="emit('oninput', item)"
                  :disabled="item.disabled"
                />
                <el-button class="input-button-right" :disabled="item.disabled" @click="emit('focus', item, form)" />
              </div>

              <!--数字-->
              <el-input
                v-if="item.type === 'number'"
                :id="item.value"
                v-model.number="form[item.value]"
                clearable
                :placeholder="item.disabled === true ? '' : `请输入${item.placeholder || ''}`"
                :maxlength="item.maxlength"
                :oninput="emit('oninput', item)"
                :disabled="item.disabled"
                @change="emit('change', form, item.value)"
              />
              <!--文本域-->
              <el-input
                v-if="item.type === 'textarea'"
                v-model="form[item.value]"
                clearable
                :rows="item.rows ? item.rows : 3"
                type="textarea"
                :placeholder="`${item.placeholder || ''}`"
                :maxlength="item.maxlength"
                show-word-limit
                resize="none"
              />
              <!-- 单选 -->
              <el-radio-group
                v-if="item.type === 'radio'"
                v-model="form[item.value]"
                :disabled="item.disabled"
                @change="emit('change', form, item.value)"
              >
                <el-radio v-for="option in item.children" :key="option.value" :label="option.value">{{ option.label }}</el-radio>
              </el-radio-group>
              <!-- 联级选择器 -->
              <el-cascader
                v-if="item.type === 'cascader'"
                v-model="form[item.value]"
                :options="item.children"
                :props="item.props"
                :show-all-levels="false"
                :disabled="item.disabled"
                @change="handleChange"
              />
              <!-- 日期 -->
              <el-date-picker v-if="item.type === 'date'" v-model="form[item.value]" type="date" :disabled="item.disabled" placeholder="选择日期" />
              <!-- 上传 -->
              <el-upload
                v-if="item.type === 'upload'"
                ref="upload"
                class="upload-file"
                :action="''"
                :accept="item.accept"
                :http-request="uploadFile"
                :before-upload="beforeUpload"
                :on-remove="onRemove"
                :limit="item.limit"
                :multiple="item.multiple"
                :on-exceed="handleExceed"
                :file-list="form.fileList"
              >
                <el-button size="small" type="primary">
                  <!-- <img src="@/assets/img/form/upload.png" alt=""> -->
                  点击上传
                </el-button>
                <div class="el-upload__tip"> 文件类型限{{ item.fileType }} </div>
              </el-upload>
              <!-- 输入框样式点击弹窗 -->
              <div v-if="item.type === 'click'" class="clickDialog" :class="{ textColor: item.leaderName }" @click="item.click">
                {{ item.leaderName || item.placeholder }}
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance, ref, reactive } from 'vue'
const { proxy } = getCurrentInstance()
const emit = defineEmits(['change', 'oninput', 'submitForm', 'uploadFile', 'clearValidate', 'onRemove', 'beforeUpload', 'handleChange', 'focus'])
defineProps({
  formItem: {
    // 表单
    type: Array,
    default: () => []
  },
  formData: {
    // 表单数据
    type: Object,
    default: () => {}
  },
  labelWidth: {
    // 标签宽度
    type: String,
    default: () => '120px'
  },
  rules: {
    // 校验规则
    type: Object,
    default: () => {}
  },
  dialogVisible: {
    type: Boolean,
    default: () => false
  }
})
const commonForm = ref(null)
const upload = ref(null)
const form = reactive(JSON.parse(JSON.stringify(proxy.formData))) // form查询数据

const submitForm = () => {
  if (proxy.rules) {
    return commonForm.value.validate((valid) => {
      if (!valid) return false
      emit('submitForm', form, valid)
    })
  }
}
const uploadFile = (params) => {
  emit('uploadFile', params)
}
const onRemove = (params) => {
  if (proxy.form.file) {
    proxy.form.file = ''
  }
  emit('onRemove', params)
}
const handleChange = (data) => {
  emit('handleChange', data)
}
const beforeUpload = (file) => {
  if (proxy.formItem.findIndex((item) => item.value === 'resourceCategory') > -1) {
    const video = ['.avi', '.mov', '.rmvb', '.rm', '.flv', '.mp4', '.3GP', '.wmv', '.mpeg', '.m4v', '.bmp']
    const text = ['.jpg', '.jpeg', '.png', '.gif', '.doc', '.docx', '.xls', '.xlsx']
    const temp = file.name.toLocaleLowerCase()
    if (proxy.form.resourceCategory === undefined) {
      // 先选资源类别, 再上传文件
      proxy.$message.warning('请先选择资源类别')
      return false
    } else if (proxy.form.resourceCategory === '1') {
      // 视频
      if (video.indexOf(temp.slice(temp.lastIndexOf('.'), temp.length)) > -1) {
        return true
      } else {
        proxy.$message.warning('请根据选择的资源类别上传对应的文件格式!')
        return false
      }
    } else if (proxy.form.resourceCategory === '2') {
      if (text.indexOf(temp.slice(temp.lastIndexOf('.'), temp.length)) > -1) {
        proxy.form.file = file
        return true
      } else {
        proxy.$message.warning('请根据选择的资源类别上传对应的文件格式!')
        return false
      }
    }
  } else {
    proxy.form.file = file
  }
}
const clearValidate = () => {
  commonForm.value.clearValidate()
}
const resetFields = () => {
  commonForm.value.resetFields()
}
const handleExceed = (files) => {
  proxy.$message.warning('当前限制选择 1 个文件')
}
defineExpose({
  submitForm,
  clearValidate,
  uploadFile,
  onRemove,
  beforeUpload,
  resetFields,
  handleChange
})
</script>
<style lang="less">
.form {
  .el-row {
    width: 100%;
  }
  .el-form-item {
    // margin: 5px 10px;
    width: calc(100% - 20px);
    .el-select {
      width: 100%;
    }
    .el-form-item__label {
      min-width: 120px;
      padding: 0;
    }
    .el-upload {
      display: flex;
      .el-button {
        margin-right: 10px;
        color: #409eff;
        background-color: #fff;
      }
    }
    .el-cascader {
      width: 100%;
    }
    .input-button {
      position: relative;
      &-right {
        background: transparent !important;
        position: absolute;
        right: 0;
        top: -2px;
        width: 100%;
        border: none;
      }
    }
  }

  .clickDialog {
    width: 100%;
    height: 34px;
    padding: 0 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    line-height: 34px;
    color: #c0c4cc;

    &:hover,
    &:focus {
      border: 1px solid #c0c4cc;
      cursor: pointer;
    }

    &:active {
      border: 1px solid #409eff;
    }

    &.textColor {
      color: #606266;
    }
  }
}
</style>
