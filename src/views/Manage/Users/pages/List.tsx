import React from 'react'
import { Table } from 'antd'

import PageLayout from '@components/PageLayout'
import Breadcrumb from '@components/Breadcrumb'

import { getListRoutes, getListColumns } from '../config'

const { Header, Content } = PageLayout

export default () => {
  const routes = getListRoutes()
  const columns = getListColumns()
  return (
    <PageLayout>
      <Header>
        <Breadcrumb routes={routes} />
      </Header>

      <Content>
        <Table columns={columns} dataSource={[]} />
      </Content>
    </PageLayout>
  )
}
