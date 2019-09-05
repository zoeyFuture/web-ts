import React, { ReactNode } from 'react'
import cs from 'classnames'
import { Spin } from 'antd'

import './index.less'

interface IProps {
  loading?: boolean,
  hidden?: boolean,
  wrapperClassName?: string,
  children?: any,
}

const Layout = (props: IProps) => {
  const {
    loading = false, // 是否loading
    children,
  } = props;

  return (
    <Spin
      spinning={loading}
      wrapperClassName="page-layout"
    >
      {children}
    </Spin>
  )
};

const Header = (props: IProps) => {
  const {
    children,
    wrapperClassName = '', // 额外样式
    ...rest // 其他属性，如 style 等
  } = props;

  return (
    <div
      className={`page-layout__header ${wrapperClassName && ''}`}
      {...rest}
    >
      {children}
    </div>
  )
};

const Content = (props: IProps) => {
  const {
    children,
    wrapperClassName = '', // 额外样式
    ...rest // 其他属性，如 style 等
  } = props;

  return (
    <div
      className={`page-layout__content ${wrapperClassName}`}
      {...rest}
    >
      {children}
    </div>
  )
};

const Footer = (props: IProps) => {
  const {
    hidden,
    children,
    wrapperClassName = '', // 额外样式
    ...rest // 其他属性，如 style 等
  } = props;

  return (
    <div
      className={
        cs(`page-layout__footer ${wrapperClassName}`, { hidden })
      }
      {...rest}
    >
      {children}
    </div>
  )
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout
