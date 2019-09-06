import { lazy } from 'react'

import { IRoute } from '@common/interface/global'

const routes: Array<IRoute> = [
  {
    name: '首页',
    path: '/home',
    component: lazy(() => import('@src/views/home')),
  },
  {
    name: '登录',
    path: '/login',
    component: lazy(() => import('@src/views/login')),
  },
  {
    name: '管理中心',
    path: '/manage',
    children: [
      {
        name: 'Hook分享',
        path: '/manage/hook-manage',
        component: lazy(() => import('@src/views/manage/hook-manage')),
      },
      {
        name: '用户管理',
        path: '/manage/users',
        component: lazy(() => import('@src/views/manage/users')),
      },
    ],
  },
]

export default routes
