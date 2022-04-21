// 查询条件
export const formItem = [
  {
    label: '创建人',
    value: 'name',
    width: 6,
    type: 'text'
  },
  {
    label: '创建时间',
    value: 'age',
    width: 6,
    type: 'text'
  },
  {
    label: '状态',
    value: 'classes',
    width: 6,
    type: 'select',
    children: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '未关闭',
        value: '0'
      },
      {
        label: '已转换为客户',
        value: '1'
      },
      {
        label: '无效',
        value: '2'
      }
    ]
  }
]

// 表头数据
export const tableHead = [
  {
    prop: 'index',
    label: '序号'
  },
  {
    prop: 'createTime',
    label: '创建时间'
  },
  {
    prop: 'company',
    label: '公司名称'
  },
  {
    prop: 'province',
    label: '区域'
  },
  {
    prop: 'contacts',
    label: '联系人'
  },
  {
    prop: 'phone',
    label: '联系电话'
  },
  {
    prop: 'creatorName',
    label: '创建人'
  }
]

// 新增表单
