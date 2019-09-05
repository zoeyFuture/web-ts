import React, { ReactNode, useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Layout, Button, Spin } from 'antd'

import './index.less'

// TODO 获取路由配置，模拟后端请求
import route from '@src/route';

const { SubMenu, Item } = Menu
const { Header, Content, Sider } = Layout

interface IProps {
  children: ReactNode,
}

// 路由分层级
export default (props:IProps) => {
  const { children } = props

  // 侧边栏菜单
  const [siderMenus, setSiderMenus] = useState([])

  useEffect(() => {
    setSiderMenus(route)
  }, [])

  const defaultOpenKeys = useMemo(() => siderMenus
    .filter(({ children }) => Array.isArray(children))
    .map(({ path }) => path),
  [siderMenus])

  console.log('defaultOpenKeys:', defaultOpenKeys)

  const defaultSelectedKeys = useMemo(() =>
    siderMenus.length > 0 && siderMenus[0].path, [siderMenus])

  return (
    <Layout className="xm-layout">
      <Header className="xm-layout__header">
        <div className="company">
          <i
            className="app-logo"
            style={{ backgroundImage: 'url(//statics.jituancaiyun.com/config/favicon.ico)' }}
          />
          <span className="title">移动彩云数字营销平台</span>
        </div>

        <div className="operation">
          <Icon type="home" />
          <span style={{ margin: '0 4px' }}>13262215037</span>
          <Button
            shape="round"
            type="primary"
            size="small"
            ghost
            style={{
              pointerEvents: 'none',
              margin: '0 12px',
            }}
          >
            省级管理员
          </Button>
          |
          <a style={{ marginLeft: '4px' }}>退出</a>
        </div>
      </Header>

      <Layout className="xm-layout__sider">
        <Sider style={{ background: '#fff' }}>
          {
            siderMenus.length > 0 && (
              <Menu
                mode="inline"
                defaultSelectedKeys={[defaultSelectedKeys]} // 默认选中的菜单
                defaultOpenKeys={defaultOpenKeys} // 默认展开的菜单
              >
                {
                  siderMenus.map((f) => {
                    let menus = []
                    if (Array.isArray(f.children)) {
                      menus = f.children.map(({ name, path }: any) => (
                        <Item key={path}>
                          <Link to={path}>{name}</Link>
                        </Item>
                      ))
                    }

                    if (menus.length > 0) {
                      return (
                        <SubMenu
                          key={f.id}
                          title={f.name}
                        >
                          {menus}
                        </SubMenu>
                      )
                    }

                    return (
                      <Item key={f.path}>
                        <Link to={f.path}>{f.name}</Link>
                      </Item>
                    )
                  })
                }
              </Menu>
            )
          }
        </Sider>

        <Layout className="xm-layout__content">
          <Content>
            { children }
          </Content>
        </Layout>
      </Layout>
    </Layout>

  )
}
