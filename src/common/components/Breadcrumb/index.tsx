import React, { ReactNode } from 'react'
import { withRouter, Link } from 'react-router-dom'

import './index.less'

interface IRoute {
  route: string, // 路由标题
  to?: string, // 跳转目标
  handleClick?: () => void, // 点击回调函数
}

interface IProps {
  routes: Array<IRoute>, // 路由配置
  extra?: ReactNode, // 额外扩展操作区域
}

export default (props: IProps) => {
  const {
    routes,
    extra,
  } = props

  return (
    <div className="bread-crumb">
      <div className="bread-crumb__content">
        {
          routes.map(({ route, to, handleClick }) => {
            if (to) {
              return (
                <Link className="route" key={route} to={to} onClick={handleClick}>{route}</Link>
              )
            } else if (handleClick) {
              return (
                <a className="route" key={route} onClick={handleClick}>{route}</a>
              )
            } else {
              return (
                <a className="route" key={route}>{route}</a>
              )
            }
          })
        }
      </div>
      {
        extra ? (
          <div className="bread-crumb__extra">
            {extra}
          </div>
        ) : null
      }
    </div>
  )
}
