import React, {Suspense} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Skeleton } from "antd";

interface IProps {
  key: number | string,
  path: string,
  exact?: boolean,
  component: any,
}

// 业务组件 - 路由健全配置
const AuthorizedRoute = (props: IProps) => {
  const { component: Component, ...rest } = props
  const isAuthenticated = true


  if (isAuthenticated) {
    return (
      <Route
        {...rest}
        render={(props) =>  (
          <Suspense fallback={<Skeleton />}>
            <Component {...props} />
          </Suspense>
        )} />
    )
  }
  return <Route {...rest} render={() => <Redirect to="/login" />} />
}

export default AuthorizedRoute
