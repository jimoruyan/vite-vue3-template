
<template>
  <div v-if="state.dialogVisible">
    <el-dialog v-model="state.dialogVisible" :close-on-click-modal="false" :close-on-press-escape="false" :title="state.title" width="50%">
      <Form
        ref="formRef"
        :form-data="state.formData"
        :form-item="state.formItem"
        :rules="state.rules"
        :dialog-visible="state.dialogVisible"
        @submitForm="submitForm"
      />
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="confirm">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { reactive, defineExpose, ref } from 'vue'
import Form from '@/components/Form/Form.vue'
import { formRules } from '@/utils/config.js'
const state = reactive({
  dialogVisible: false,
  title: '',
  rules: {
    examinationName: formRules('must')
  },
  form: {
  },
  formData: {
  },
  formItem: [
    {
      label: '考试名称',
      type: 'text',
      value: 'examinationName',
      width: 12
    },
    {
      label: '认证等级',
      type: 'select',
      value: 'level',
      children: [],
      width: 12
    },
    {
      label: '语言类型',
      type: 'select',
      value: 'certificationType',
      children: [],
      width: 12
    },
    {
      label: '关联考试模板',
      type: 'select',
      value: 'templateId',
      children: [],
      width: 12
    },
    {
      label: '考试次数',
      type: 'text',
      subType: 'number',
      value: 'examinationCount',
      placeholder: '1-99',
      width: 12
    },
    {
      label: '合格分数',
      type: 'text',
      value: 'passScore',
      placeholder: '1-100',
      width: 12
    },
    {
      label: '考试时间',
      type: 'text',
      value: 'examinationTime',
      placeholder: '1-120',
      width: 12
    },
    {
      label: '积分',
      type: 'text',
      value: 'integral',
      placeholder: '1-10',
      width: 12
    }
  ]
})
const formRef = ref(null)
const open = () => {
  state.title = '新增'
  state.dialogVisible = true
}
const edit = (data) => {

}
// 确定
const confirm = () => formRef.value.submitForm()

// 提交数据
const submitForm = (data) => {
  console.log(data)
}
const cancel = () => {
  state.dialogVisible = false
}

defineEmits([''])
defineExpose({ open, edit })
</script>
