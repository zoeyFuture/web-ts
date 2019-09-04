import React, { useState } from 'react'
import {object} from "prop-types";

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

export default (url: string, initParams: IInitParams = {}) => {
  const [data, setData] = useState([])

  // 搜索参数
  const [params, setParams] = useState(initParams.params || {})

  // 分页器配置
  const [pagination, setPagination] = useState(initParams.pagination || {
    current: 1,
    pageSize: 20,
    total: 0,
    showTotal: total => `共${total}条`,
  })

  const fetchData = (searchParams = params) => {
    const {current: currentPage, pageSize} = pagination

    return http.get(url,
      {
        currentPage,
        pageIndex: currentPage,
        pageSize,
        ...searchParams,
      }).then((res: object) => {
      const { data } = res

      setData(data)
      setParams(searchParams)


      setPagination({
        ...pagination,
        total: data.total,
        current: currentPage,
      })
    })
  }

  const pageTo = (pagination) => fetchData(pagination)

  const search = (params) => fetchData({...pagination, current: 1}, params)

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
