// 查询条件
export const formItem = [
  {
    label: '操作类型',
    value: 'type',
    type: 'text',
    width: 6
  },
  {
    label: '操作描述关键字',
    value: 'content',
    type: 'text',
    width: 6
  },
  {
    label: '时间范围',
    value: 'time',
    type: 'daterange',
    width: 6
  }
]
// 表头数据
export const tableHead = [
  {
    prop: 'index',
    label: '序号',
    width: 60
  },
  {
    prop: 'service',
    label: '服务名称'
  },
  {
    prop: 'model',
    label: '操作模块'
  },
  {
    prop: 'type',
    label: '操作类型'
  },
  {
    prop: 'description',
    label: '操作描述'
  },
  {
    prop: 'name',
    label: '用户名称'
  },
  {
    prop: 'operator',
    label: '用户账号'
  },
  {
    prop: 'time',
    label: '时间'
  }
]
// 详情数据
export const detailItem = [
  {
    label: '服务名称',
    value: 'service',
    width: 12
  },
  {
    label: '操作模块',
    value: 'model',
    width: 12
  },
  {
    label: '操作类型',
    value: 'type',
    width: 12
  },
  {
    label: '操作描述',
    value: 'description',
    width: 12
  },
  {
    label: '用户名称',
    value: 'name',
    width: 12
  },
  {
    label: '用户账号',
    value: 'operator',
    width: 12
  },
  {
    label: '操作时间',
    value: 'time',
    width: 12
  }
]
