import { lazy } from 'react'

export default [
  {
    name: '首页',
    path: '/home',
    component: () => import('@src/routes/Home')
  },
  {
    name: '登录',
    path: '/login',
    component: () => import('@src/routes/Login')
  },
  {
    name: '管理中心',
    path: '/manage',
    children: [
      {
        name: '用户管理',
        path: '/manage/users',
        component: () => import('@src/routes/Manage/Users')
      },
      {
        name: 'Hook分享',
        path: '/manage/hook',
        component: () => import('@src/routes/Manage/Hook')
      },
    ],
  },
]
