import React, { ReactNode } from 'react'
import { Layout, Menu } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router'

import { IRoute } from '@common/interface/global'

// TODO 获取路由配置，模拟后端请求
import routes from '@src/route'

const { Sider } = Layout
const { SubMenu } = Menu

interface IProps extends RouteComponentProps {
  // routes: Array<IRoute>,
  children?: ReactNode,
}

const XmSider: React.FC = (props: IProps) => {
  const { history, location } = props
  const { pathname } = location

  const renderRoutes = (routes: Array<IRoute>) => {
    return routes.map(({ name, path, children }) => (children ? (
      <SubMenu key={path} title={name}>
        {renderRoutes(children)}
      </SubMenu>
    ) : (
      <Menu.Item key={path}>{name}</Menu.Item>
    ))
    )
  }

  const defaultOpenKeys = routes.filter((it) => (Array.isArray(it.children) && it.children.length > 0)
  ).map((d) => d.path)

  const paths = pathname
    .split('/')
    .filter(Boolean)
    .map((_, index, arr) => `/${arr.slice(0, index + 1).join('/')}`)

  return (
    <Sider
      style={{ backgroundColor: '#fff' }}
    >
      <Menu
        mode="inline"
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={paths}
        onClick={({ key }) => key !== pathname && history.push(key)}
      >
        {renderRoutes(routes)}
      </Menu>
    </Sider>
  )
}

export default withRouter(XmSider)
