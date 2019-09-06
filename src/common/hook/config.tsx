export const getListRoutes = () => ([
  {
    route: '列表',
  },
]);

export const getDetailRoutes = () => ([
  {
    route: '列表',
    to: '/manage/users/list',
  },
  {
    route: '详情',
  },
]);

export const getListColumns = () => ([
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
])

export const getDetailColumns = () => ([
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
])
