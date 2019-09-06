import React from 'react'
import { Table } from 'antd'
// import { useSelector, useDispatch } from 'react-redux'

import PageLayout from '@components/PageLayout'
import Breadcrumb from '@components/Breadcrumb'

import { getRoutes, getColumns } from '@common/home/config'

const { Header, Content } = PageLayout

export default () => {
  // const dispatch = useDispatch()
  // const count = useSelector(({ counter }) => counter.count)
  // const handleIncrease = () => {
  //   dispatch({
  //     type: EnumAction.INCREASE,
  //     payload: {
  //       count: 10,
  //     },
  //   })
  // }
  //
  // const handleDecrease = () => {
  //   dispatch({
  //     type: EnumAction.DECREASE,
  //     payload: {
  //       count: 10,
  //     },
  //   })
  // }

  const routes = getRoutes()
  const columns = getColumns()

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
