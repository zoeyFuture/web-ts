import React, { useState } from 'react'
import { Table, Button } from 'antd'

import PageLayout from '@components/PageLayout'
import Breadcrumb from '@components/Breadcrumb'

import Counter from '@unstated/counter'

import { getRoutes, getColumns } from './config'

const { Header, Content } = PageLayout

export default () => {
  const counter = Counter.useContainer()

  const handleIncrease = () => {
    counter.increase()
  }

  const handleDecrease = () => {
    counter.decrease()
  }

  const routes = getRoutes()
  const columns = getColumns()
  return (
    <PageLayout>
      <Header>
        <Breadcrumb routes={routes} />
      </Header>

      <Content>
        <Button type="link" loading>
          Link
        </Button>
        <span>{counter.count}</span>
        <Button onClick={handleIncrease}>增加</Button>
        <Button onClick={handleDecrease}>减少</Button>
        <Table columns={columns} dataSource={[]}/>
      </Content>
    </PageLayout>
  )
}

