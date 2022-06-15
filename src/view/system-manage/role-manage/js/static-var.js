// 查询条件
export const formItem = [
  {
    label: '角色名称',
    value: 'roleName',
    width: 6,
    type: 'text'
  }
]

// 表头数据
export const tableHead = [
  {
    prop: 'index',
    label: '序号'
  },

  {
    prop: 'roleName',
    label: '角色名称'
  },
  {
    prop: 'remake',
    label: '角色描述'
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
    label: '角色名称',
    value: 'roleName',
    width: 12
  },
  {
    label: '角色描述',
    value: 'remake',
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
  }
]
