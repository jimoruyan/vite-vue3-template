<template>
  <el-dialog
    v-model="state.dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :title="state.title"
    destroy-on-close
    width="50%"
  >
    <Form ref="formRef" :form-data="state.formData" :form-item="state.formItem" :rules="state.rules" @submitForm="submitForm" />
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Form from '@/components/Form/Form.vue'
import { formRules } from '@/utils/config.js'

const state = reactive({
  dialogVisible: false,
  title: '',
  rules: {
    roleName: formRules('must'),
    roleId: formRules('must'),
    menu: formRules('must')
  },
  formData: {},
  formItem: [
    {
      label: '角色名称',
      type: 'text',
      value: 'roleName',
      width: 24
    },
    {
      label: '菜单权限',
      value: 'menu',
      type: 'select',
      children: [],
      width: 24
    },
    {
      label: '角色描述',
      value: 'remake',
      type: 'text',
      width: 24
    }

  ]
})
const formRef = ref(null)

function open(data) {
  state.formData = {}
  if (data) {
    state.title = '编辑'
    state.formData = data
    console.log(state.formData)
  } else {
    state.title = '新增'
  }
  state.dialogVisible = true
}

const edit = (data) => {}
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
