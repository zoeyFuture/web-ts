import { lazy } from 'react'

export default [
  {
    name: '首页',
    path: '/home',
    component: lazy(() => import('@src/views/Home')),
  },
  {
    name: '登录',
    path: '/login',
    component: lazy(() => import('@src/views/Login')),
  },
  {
    name: '管理中心',
    path: '/manage',
    children: [
      {
        name: 'Hook分享',
        path: '/manage/hook',
        component: lazy(() => import('@src/views/Manage/Hook')),
      },
      {
        name: '用户管理',
        path: '/manage/users',
        component: lazy(() => import('@src/views/Manage/Users')),
      },
    ],
  },
]
