// 查询条件
export const formItem = [
  {
    label: '用户名',
    value: 'userName',
    width: 6,
    type: 'text'
  },
  {
    label: '姓名',
    value: 'name',
    width: 6,
    type: 'text'
  },
  {
    label: '用户角色',
    value: 'roleId',
    width: 6,
    type: 'select',
    children: [
      {
        label: '管理员',
        value: '0'
      },
      {
        label: '售前售后',
        value: '1'
      },
      {
        label: '用户',
        value: '2'
      }
    ]
  }
]

// 表头数据
export const tableHead = [
  {
    prop: 'index',
    label: '序号',
    width: 100
  },
  {
    prop: 'name',
    label: '姓名',
    width: 100
  },
  {
    prop: 'userName',
    label: '用户名'
  },
  {
    prop: 'role',
    label: '用户角色'
  },
  {
    prop: 'sex',
    label: '性别',
    width: 70
  },
  {
    prop: 'idNo',
    label: '省份证号'
  },
  {
    prop: 'phone',
    label: '联系电话'
  },
  {
    prop: 'email',
    label: '邮箱'
  },
  {
    prop: 'createTime',
    label: '创建时间'
  },
  {
    prop: 'creatorName',
    label: '创建人'
  }
]
// 详情数据
export const detailItem = [
  {
    label: '姓名',
    value: 'name',
    width: 12
  },
  {
    label: '联系电话',
    value: 'phone',
    width: 12
  },
  {
    label: '用户名',
    value: 'userName',
    width: 12
  },
  {
    label: '密码',
    value: 'password',
    width: 12
  },
  {
    label: '性别',
    value: 'sex',
    width: 12
  },
  {
    label: '身份证号',
    value: 'idNo',
    width: 12
  },
  {
    label: '邮箱',
    value: 'email',
    width: 12
  },
  {
    label: '用户角色',
    value: 'roleId',
    width: 12
  },
  {
    label: '创建时间',
    value: 'createTime',
    width: 12
  },
  {
    label: '创建人',
    value: 'creatorName',
    width: 12
  },
  {
    label: '大屏地址',
    value: 'screenAddress',
    width: 12
  }
  
]
