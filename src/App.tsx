import React from "react"
import * as Loadable from 'react-loadable'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import routeConfig from './route'

import 'antd/dist/antd.css'

import Loading from '@components/Loading'
import XmLayout from '@components/XmLayout'

const App = () => (
  <HashRouter>
    <Switch>
      <XmLayout>
        {routeConfig.map(item => (
          <Route
            key={item.path}
            exact={true}
            path={item.path}
            component={Loadable({
              loader: item.component,
              loading: Loading,
            })}
          />
        ))}

        <Route path="/" exact render={() => (
          <Redirect to="/home" />
        )} />
      </XmLayout>
    </Switch>
  </HashRouter>
)

export default App
