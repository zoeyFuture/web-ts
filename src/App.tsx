import React from "react"
import * as Loadable from 'react-loadable'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import route from './route'

import 'antd/dist/antd.css'

import Loading from '@components/Loading'
import NotFound from '@components/NotFound'
import XmLayout from '@components/XmLayout'
import AuthorizedRoute from '@container/AuthorizedRoute'



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

// 根据后端配置渲染路由信息
const App = () => (
  <HashRouter>
    <Switch>
      <XmLayout>
        {getRouteMap(route).map((item: any) => (
          <AuthorizedRoute
            key={item.path}
            exact={true}
            path={item.path}
            component={Loadable({
              loader: item.component,
              loading: Loading
            })}
          />
        ))}
        {/*<Route component={NotFound} />*/}
      </XmLayout>
    </Switch>
  </HashRouter>
)



export default App
