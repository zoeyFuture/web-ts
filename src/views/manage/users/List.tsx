import React from 'react'
import { Table } from 'antd'

import PageLayout from '@components/PageLayout'
import Breadcrumb from '@components/Breadcrumb'

import { getListRoutes, getListColumns } from '@common/user/config'

const { Header, Content } = PageLayout

const List: React.FC = () => {
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

export default List
