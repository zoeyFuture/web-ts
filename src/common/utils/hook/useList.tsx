import { useState } from 'react'
import axios from 'axios'

interface IPagination {
  current: number,
  pageIndex?: number,
  pageSize: number,
  total: number,
  showTotal: (total: number) => string,
}

interface IInitParams {
  params?: any, // 初始化的搜索参数
  pagination?: IPagination, // 分页器参数
}

interface IDate {
  total: number,
}

interface IResponse {
  data: IDate,
}

export default (url: string, initParams: IInitParams = {}) => {
  const [data, setData] = useState([])

  // 搜索参数
  const [params, setParams] = useState(initParams.params || {})

  // 分页器配置
  const [pagination, setPagination] = useState(initParams.pagination || {
    current: 1,
    pageSize: 20,
    total: 0,
    showTotal: (total) => `共${total}条`,
  })

  const fetchData = (searchParams = params) => {
    const { current: currentPage, pageSize } = pagination

    return axios.get(url,
      {
        currentPage,
        pageIndex: currentPage,
        pageSize,
        ...searchParams,
      }).then((res: IResponse) => {
      const { data: IDate } = res
      const { total } = data

      setData(data)
      setParams(searchParams)


      setPagination({
        ...pagination,
        total: total,
        current: currentPage,
      })
    })
  }

  const pageTo = (pagination: any) => fetchData(pagination)

  const search = (params: any) => fetchData({ ...pagination, current: 1 })

  return {
    pagination,
    params,
    data,
    setPagination,
    setParams,
    setData,
    pageTo,
    search,
    fetchData,
  }
}
