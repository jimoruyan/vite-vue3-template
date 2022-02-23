
// 表单校验
export const formRules = (type, maxlength, min, max) => {
  const rule = {
    // 必填
    must: [
      { required: true, message: '不能为空' },
      { pattern: /^(?!(\s+$))/, message: '输入的值不能只有空格', trigger: 'blur' }
    ],
    maxLengthRequired: [ // 数字--不超过max
      { required: true, message: '不能为空' },
      { type: 'number', message: `正整数, 且数字长度不超过${maxlength}`, trigger: 'blur' },
      { type: 'number', message: `正整数, 且数值大小不超过${max}`, trigger: 'blur', max: max },
      { pattern: /^[1-9]+[0-9]*$/, message: '正整数, 不包含0', trigger: 'blur' }
    ],
    numberZeroRequired: [ // 数字--整数---包含0
      { required: true, message: '不能为空' },
      { type: 'number', message: `非负整数, 且数字长度不超过${maxlength}`, trigger: 'blur' },
      { pattern: /^([1-9]\d*|[0]{1,1})$/, message: '请输入非负整数', trigger: 'blur' }
    ],
    cellPhone: [ // 手机号
      { required: true, message: '不能为空', trigger: 'blur' },
      { pattern: /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/, message: '请输入正确的手机号', trigger: 'blur' }
    ],
    idNo: [ // 身份证
      { required: true, message: '身份证号码不能为空', trigger: 'blur' },
      { pattern: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, message: '请输入正确的身份证号', trigger: 'blur' }
    ],
    link: [ // 链接
      { required: true, message: '不能为空', trigger: 'blur' },
      { pattern: /^(http|https):\/\/([\w.]+\/?)\S*/, message: '请输入正确的链接地址', trigger: 'blur' }
    ],
    file: [// 文件
      { required: true, message: '文件不能为空', trigger: 'blur' }
    ],
    passwordRequired: [ // 密码
      { required: true, message: '不能为空', trigger: 'blur' },
      { pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>,./]).{6,16}$/, message: `密码必须为长度6-16位，且为字母、数字和非空格特殊字符的混合组合`, trigger: 'blur' }
    ],
    // 非必填
    password: [ // 密码
      { pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>,./]).{6,16}$/, message: `密码必须为长度6-16位，且为字母、数字和非空格特殊字符的混合组合`, trigger: 'blur' }
    ]
  }
  return rule[type]
}
// 文件下载
export const fileDownTable = function(name, data) {
  const fileName = name
  const blob = new Blob([data], { type: 'application/vnd.ms-excel' })
  // let blob = new Blob([data], { type: 'application/x-7z-compressed' })
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob) // 本地保存
  } else {
    const link = document.createElement('a') // a标签下载
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
    link.click()
    window.URL.revokeObjectURL(link.href)
  }
}
