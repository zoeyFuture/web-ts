import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ROUTES, ROOT_ROUTE } from '@common/hook/constant'

import List from './List'
import Detail from './Detail'

export default () => {
  return (
    <>
      <Route path={ROUTES.LIST} component={List} />
      <Route path={`${ROUTES.DETAIL}/:id`} component={Detail} />
      <Route
        path={ROOT_ROUTE}
        exact
        render={() => (
          <Redirect to={ROUTES.LIST} />
        )}
      />
    </>
  )
}
