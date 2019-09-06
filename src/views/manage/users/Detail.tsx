import React from 'react'
import { Table } from 'antd'

import PageLayout from '@components/PageLayout'
import Breadcrumb from '@components/Breadcrumb'

import { getDetailRoutes, getDetailColumns } from '@common/user/config'

const { Header, Content } = PageLayout

export default () => {
  const routes = getDetailRoutes()
  const columns = getDetailColumns()
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
