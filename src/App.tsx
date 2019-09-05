import React, { Suspense } from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { Skeleton, Spin } from 'antd'
import * as Loadable from 'react-loadable'

import 'antd/dist/antd.css'

import Loading from '@components/Loading'
import XmLayout from '@components/XmLayout'
import AuthorizedRoute from '@container/AuthorizedRoute'
import route from './route'

const getRouteMap = (routes: any[]) => {
  const routeConfig: any = [];

  routes.forEach((it) => {
    if (Array.isArray(it.children)) {
      it.children.forEach((d: any) => {
        routeConfig.push(d)
      })
    } else {
      routeConfig.push(it)
    }
  })

  return routeConfig;
}

interface IRoute {
  path: string,
  component: React.FC,
}

// 根据后端配置渲染路由信息
const App = () => (
  <HashRouter>
    <Switch>
      <XmLayout>
        {getRouteMap(route).map((route: IRoute) => (
          <AuthorizedRoute
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </XmLayout>
    </Switch>
  </HashRouter>
)


export default App
