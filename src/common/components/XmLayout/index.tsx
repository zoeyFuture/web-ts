import React, { ReactNode, useCallback, useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Layout, Button } from 'antd'

import './index.less'

const { SubMenu, Item } = Menu
const { Header, Content, Sider } = Layout

interface IProps {
  children: ReactNode,
}

// 路由分层级
export default (props:IProps) => {
  const { children } = props

  // 侧边栏菜单
  const [subMenus, setSubMenus] = useState([])
  const [navMenus, setNavMenus] = useState([]) // 整体菜单栏信息

  useEffect(() => {
    const routes = require('@mock/routes.json')
    setNavMenus(routes.data)
  }, [])

  const handleMenuSelect = useCallback(({ key }) => {
    const { subMenus } = navMenus.find(d => d.id === Number(key)) || {}
    setSubMenus(subMenus)
  }, [navMenus])

  const defaultSelectedKeys = useMemo(() =>
    navMenus.length > 0 ? [navMenus[0].id.toString()] : [], [navMenus])

  const defaultOpenKeys = useMemo(() =>
    subMenus.filter(({ subMenus }) => Array.isArray(subMenus))
      .map(({ id }) => id.toString()), [subMenus])

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

        <Menu
          className="menu"
          mode="horizontal"
          defaultSelectedKeys={defaultSelectedKeys}
          onSelect={handleMenuSelect}
        >
          {
            navMenus.map((it: any) => (
              <Item key={it.id}>{it.name}</Item>
            ))
          }
        </Menu>

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
        <Sider>
          {
            subMenus.length > 0 && (
              <Menu
                mode="inline"
                // defaultSelectedKeys={['1']} // 默认选中的菜单
                defaultOpenKeys={defaultOpenKeys} // 默认展开的菜单
              >
                {
                  subMenus.map(f => {
                    let menus = []
                    if (Array.isArray(f.subMenus) && subMenus.length > 0) {
                      menus = f.subMenus.map(({ id, name, pageUri }: any) => (
                        <Item key={id}>
                          <Link to={pageUri}>{name}</Link>
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
                      <Item key={f.id}>
                        <Link to={f.pageUri}>{f.name}</Link>
                      </Item>
                    )
                  })
                }
              </Menu>
            )
          }
        </Sider>

        {/*// 需引入原子库*/}

        <Layout className="xm-layout__content">
          <Content>
            { children }
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
