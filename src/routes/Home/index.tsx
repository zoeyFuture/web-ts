import React from 'react'
import { Table, Button } from 'antd'
import { connect } from 'react-redux'
import PageLayout from '@components/PageLayout'
import Breadcrumb from '@components/Breadcrumb'

import { getRoutes, getColumns } from './config'

const { Header, Content } = PageLayout

const Home = (props: any) => {
  const { counter } = props
  console.log('props:', props)

  const add = () => {
    props.CounterIncrease(10)
  }

  const routes = getRoutes()
  const columns = getColumns()
  return (
    <PageLayout>
      <Header>
        <Breadcrumb routes={routes} />
      </Header>

      <Content>
        <span>{counter.counter}</span>
        <Button onClick={add}>增加</Button>
        <Table columns={columns} dataSource={[]}/>
      </Content>
    </PageLayout>
  )
}

const mapStateToProps = (state: any): object => {
  return {
    counter: state.counter,
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    CounterIncrease: (payload: any) => {
      dispatch({
        payload,
        type: "Increase"
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
