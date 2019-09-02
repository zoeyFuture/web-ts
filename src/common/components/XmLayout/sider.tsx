import React, { ReactNode, useCallback, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Layout, Button } from 'antd'

import './index.less'

const routes = require('@mock/routes.json')

const { SubMenu, Item } = Menu
const { Header, Content, Sider } = Layout

interface ISider {
  id: number,
  name: string,
  subMenus: Array<ISider>,
}

interface IProps {
  siders: Array<ISider>,
}

// 路由分层级
export default (props:IProps) => {
  const { siders } = props

  // 侧边栏菜单
  const [subMenus, setSubMenus] = useState([])
  const [navMenus, setNavMenus] = useState([]) // 整体菜单栏信息

  useEffect(() => {
    const routes = require('@mock/routes.json')
    setNavMenus(routes.data)
  }, [])

  // 异步请求获取的路由配置信息
  console.log('navMenus:', navMenus)

  const handleMenuSelect = useCallback((params) => {
    const { key } = params
    console.log('handleMenuSelect:', params)

    const { subMenus } = navMenus.find(d => d.id === key) || {}
    setSubMenus(subMenus)
  }, [])

  const defaultSelectedKeys = navMenus.length > 0 ? [navMenus[0].id.toString()] : []
  console.log('defaultSelectedKeys:', defaultSelectedKeys)
  console.log('subMenus:', subMenus)

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
        <Sider width={200} style={{ background: '#fff' }}>
          {

            subMenus.map(f => {
              if (Array.isArray(f.subMenus) && subMenus.length > 0) {
                f.subMenus.map(d => {
                  return (

                  )
                })
              }
              <Item key="6">品牌管理</Item>
            })
          }
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']} // 默认选中的菜单
            defaultOpenKeys={['sub1']} // 默认展开的菜单
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title="财务中心"
            >
              <Menu.Item key="1">财务统计</Menu.Item>
              <Menu.Item key="2">充值管理</Menu.Item>
              <Menu.Item key="3">开票管理</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title="运营中心"
            >
              <Menu.Item key="6">品牌管理</Menu.Item>
              <Menu.Item key="7">店铺管理</Menu.Item>
              <SubMenu key="sub3" title="类目管理">
                <Menu.Item key="91">
                  <Link to="/home">京东类目管理</Link>
                </Menu.Item>
                <Menu.Item key="92">商城类目管理</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
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
