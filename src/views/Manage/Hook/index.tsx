import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import List from './views/List'
import Detail from './views/Detail'

export default ({ match: { path } }) => {
  return (
    <>
      <Route path={`${path}/list`} component={List} />
      <Route path={`${path}/detail/:id`} component={Detail} />
      <Route
        path={path}
        exact
        render={() => (
          <Redirect to={`${path}/list`} />
        )}
      />
    </>
  )
}
