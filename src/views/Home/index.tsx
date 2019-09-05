import React from 'react'
import { Table, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import PageLayout from '@components/PageLayout'
import Breadcrumb from '@components/Breadcrumb'
import { EnumAction } from '@redux/counter/actions'

import { getRoutes, getColumns } from './config'

const { Header, Content } = PageLayout

export default () => {
  const dispatch = useDispatch()
  const count = useSelector(({ counter }) => counter.count)
  const handleIncrease = () => {
    dispatch({
      type: EnumAction.INCREASE,
      payload: {
        count: 10,
      },
    })
  }

  const handleDecrease = () => {
    dispatch({
      type: EnumAction.DECREASE,
      payload: {
        count: 10,
      },
    })
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
        <span>{count}</span>
        <Button onClick={handleIncrease}>增加</Button>
        <Button onClick={handleDecrease}>减少</Button>
        <Table columns={columns} dataSource={[]} />
      </Content>
    </PageLayout>
  )
}
