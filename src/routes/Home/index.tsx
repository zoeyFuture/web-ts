import React from 'react'
import { Table } from 'antd'
import PageLayout from '@components/PageLayout'
import Breadcrumb from '@components/Breadcrumb'

import { getRoutes, getColumns } from './config'

const { Header, Content } = PageLayout

export default () => {
  const routes = getRoutes()
  const columns = getColumns()
  return (
    <PageLayout>
      <Header>
        <Breadcrumb routes={routes} />
      </Header>

      <Content>
        <Table columns={columns} dataSource={[]}/>
      </Content>
    </PageLayout>
  )
}
