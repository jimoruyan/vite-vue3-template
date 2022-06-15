<template>
  <div class="form">
    <div v-if="formItem && formItem.length > 0">
      <el-form
        ref="commonForm"
        size="small"
        :rules="rules"
        :model="state.form"
        :inline="true"
        label-position="left"
        v-bind="{ 'label-width': labelWidth }"
      >
        <el-row>
          <el-col v-for="(item, index) in formItem" :key="index" :span="item.width">
            <el-form-item :key="index" class="table-header-item" :label="item.label" :prop="item.value">
              <!-- 下拉框 -->
              <el-select
                v-if="item.type === 'select'"
                v-model="state.form[item.value]"
                clearable
                :filterable="item.filterable ? item.filterable : false"
                :multiple="item.multiple ? item.multiple : false"
                :disabled="item.disabled"
                :placeholder="`请选择${item.placeholder || ''}`"
                @change="emit('change', state.form, item.value)"
              >
                <el-option v-for="(option, i) in item.children" :key="i" :value="option.value" :label="option.label" />
              </el-select>
              <!--文本框-->
              <el-input
                v-if="item.type === 'text'"
                :id="item.value"
                v-model.trim="state.form[item.value]"
                clearable
                :placeholder="item.disabled === true ? '' : `请输入${item.placeholder || ''}`"
                :maxlength="item.maxlength"
                :oninput="emit('oninput', item)"
                :disabled="item.disabled"
                @change="emit('change', state.form, item.value)"
              />
              <!-- 密码框 -->
              <el-input
                v-if="item.type === 'password'"
                v-model="state.form[item.value]"
                type="password"
                :placeholder="item.placeholder ? item.placeholder : '请输入'"
                show-password
                :disabled="item.disabled"
              />
              <!-- 内置弹窗 -->
              <div v-if="item.type === 'inputBtn'" class="input-button">
                <el-input
                  :id="item.value"
                  v-model.trim="state.form[item.value]"
                  class="input-button-left"
                  :placeholder="item.disabled === true ? '' : `请选择${item.placeholder || ''}`"
                  :oninput="emit('oninput', item)"
                  :disabled="item.disabled"
                />
                <el-button class="input-button-right" :disabled="item.disabled" @click="emit('focus', item, state.form)" />
              </div>

              <!--数字-->
              <el-input
                v-if="item.type === 'number'"
                :id="item.value"
                v-model.number="state.form[item.value]"
                clearable
                :placeholder="item.disabled === true ? '' : `请输入${item.placeholder || ''}`"
                :maxlength="item.maxlength"
                :oninput="emit('oninput', item)"
                :disabled="item.disabled"
                @change="emit('change', state.form, item.value)"
              />
              <!--文本域-->
              <el-input
                v-if="item.type === 'textarea'"
                v-model="state.form[item.value]"
                clearable
                :rows="item.rows ? item.rows : 3"
                type="textarea"
                :placeholder="`${item.placeholder || ''}`"
                :maxlength="item.maxlength"
                show-word-limit
                resize="none"
              />
              <!-- 颜色选择 -->
              <el-color-picker v-if="item.type === 'colorPicker'" :predefine="item.predefine || []" v-model="state.form[item.value]" />
              <!-- 单选 -->
              <el-radio-group
                v-if="item.type === 'radio'"
                v-model="state.form[item.value]"
                :disabled="item.disabled"
                @change="emit('change', state.form, item.value)"
              >
                <el-radio v-for="option in item.children" :key="option.value" :label="option.value">{{ option.label }}</el-radio>
              </el-radio-group>
              <!-- 联级选择器 -->
              <el-cascader
                v-if="item.type === 'cascader'"
                v-model="state.form[item.value]"
                :options="item.children"
                :props="item.props"
                :show-all-levels="false"
                :disabled="item.disabled"
                @change="handleChange"
              />
              <!-- 日期 -->
              <el-date-picker
                v-if="item.type === 'date'"
                v-model="state.form[item.value]"
                type="date"
                :disabled="item.disabled"
                placeholder="选择日期"
              />
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
                :file-list="state.form.fileList"
              >
                <el-button size="small" type="primary"> 点击上传 </el-button>
              </el-upload>
              <!-- 上传图片 -->
              <el-upload
                v-if="item.type === 'uploadCard'"
                action="#"
                :accept="item.accept"
                list-type="picture-card"
                :on-remove="onRemove"
                :on-exceed="handleExceed"
                :http-request="httpRequest"
                :file-list="state.form[item.value]"
              >
                <el-icon><Plus /></el-icon>
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
import { getCurrentInstance, ref, reactive, watchEffect } from 'vue'
import { Plus } from '@element-plus/icons'
const { proxy } = getCurrentInstance()
const emit = defineEmits(['change', 'oninput', 'submitForm', 'uploadFile', 'clearValidate', 'beforeUpload', 'handleChange', 'focus'])
const props = defineProps({
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
  }
})
const state = reactive({
  form: {}
})

const commonForm = ref(null)
const upload = ref(null)

watchEffect(() => {
  state.form = JSON.parse(JSON.stringify(props.formData))
})

const submitForm = () => {
  if (props.rules) {
    return commonForm.value.validate((valid) => {
      if (!valid) return false
      emit('submitForm', state.form, valid)
    })
  } else {
    emit('submitForm', state.form)
  }
}
const uploadFile = (params) => {
  emit('uploadFile', params)
}
const onRemove = (params) => {
  const index = state.form.fileList.findIndex((item) => item.file.name === params.name)
  state.form.fileList.splice(index, 1)
}
const handleChange = (data) => {
  emit('handleChange', data)
}
const beforeUpload = (file) => {
  state.form.file = file
}
const httpRequest = (file) => {
  if (!state.form.fileList) {
    state.form.fileList = []
  }
  state.form.fileList.push(file)
  console.log(state.form)
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
		width: calc(100% - 20px);
		.el-select {
			width: 100%;
		}
		.el-form-item__label {
			min-width: 120px;
			padding: 0;
		}
		:deep(.el-upload) {
			display: flex;
			.el-button {
				margin-right: 10px;
				color: #409eff;
				background-color: #fff;
			}
			&.el-upload--picture-card {
				display: inline-block;
			}
		}
		.el-upload-list{
			.el-upload-list__item-preview {
				display: none;
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
