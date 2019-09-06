import React, { ReactNode } from 'react'
import { Icon, Layout, Button } from 'antd'

import XmSider from './XmSider'

import './index.less'

interface IRoute {
  name: string,
  path: string,
  component?: any,
  children?: Array<IRoute>,
}

const { Header, Content } = Layout

interface IProps {
  children: ReactNode,
}

// 路由分层级
export default (props:IProps) => {
  const { children } = props

  // 获取菜单数据，保存到redux中
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
        <XmSider />

        <Layout className="xm-layout__content">
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
