import React, { ReactNode, useCallback, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Layout, Button } from 'antd'

import './index.less'

const routes = require('@mock/routes.json')

const { SubMenu, Item } = Menu

interface IMenu {
  id: number,
  name: string,
}

interface IProps {
  menus: Array<IMenu>,
}

// 路由分层级
export default (props:IProps) => {
  const { menus } = props

  // 侧边栏菜单
  const [subMenus, setSubMenus] = useState([])
  const [navMenus, setNavMenus] = useState([]) // 整体菜单栏信息

  // 异步请求获取的路由配置信息
  console.log('menus:', menus)

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
  )
}
