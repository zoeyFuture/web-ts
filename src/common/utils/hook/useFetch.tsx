import React, { useState, useEffect } from 'react'

export default (
  fetchFunction: (params: any) => void,
  initParams = {}, // 初始化的请求参数
  initResult = {}, // 初始化的请求结果
  isExecute = false, // 是否立即执行
) => {
  const [result, setResult] = useState(initResult)
  const [failed, setFailed] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async (params: any) => {
    if (loading) {
      return false
    }
    setLoading(true)

    // 异步请求使用try catch语句包裹
    try {
      const result = await fetchFunction(params)

      // @ts-ignore
      setResult(result)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      failed && failed(err)
    }
  }

  // 配置请求异常处理数据
  const setError = (func: () => void) => {
    func && setFailed(func)
  }

  // 首次执行只请求一次
  useEffect(() => {
    isExecute && fetchData(initParams)
  }, [])

  /**
   * @return
   * result 返回的数据
   * loading 是否在请求中
   * fetchData 手动再次触发请求
   * setError 配置请求错误时，需要执行的处理函数
   */
  return {
    result,
    loading,
    fetchData,
    setError,
  }
}
