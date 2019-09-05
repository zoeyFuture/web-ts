export const getListRoutes = () => ([
  {
    route: '用户管理',
    path: '/manage/users',
  },
  {
    route: '列表',
  }
]);

export const getDetailRoutes = () => ([
  {
    route: '用户管理',
    path: '/manage/users',
  },
  {
    route: '列表',
    path: '/manage/users/list',
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
