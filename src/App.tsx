import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import routes from './routes'

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(item => (
        <Route
          key={item.path}
          exact={true}
          path={item.path}
          component={item.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
)

export default App
