import axios from 'axios'
import { message } from 'antd'

interface IReqConfig {
  filters: Array<any>, // 默认过滤参数
  data: object, // post 请求参数
  params: object, // get 请求参数
}

const http = axios.create({})

http.interceptors.request.use((config: IReqConfig) => {
  const {
    filters = [NaN, null, undefined],
    data,
    params,
  } = config

  data && clearObj(data, filters)
  params && clearObj(params, filters)

  return { data, params }
})

http.interceptors.response.use((res: any) => {
  const { config, data } = res
  const { note } = config
  const { success, msg, code } = data

  if (success) {
    // 弹出成功消息
    note && message.success(note)
    return Promise.resolve(data)
  } else {
    // 未登录跳转
    code === 601 && (location.href = '/#/login')

    message.error(msg || '服务端错误')
    return Promise.reject(code)
  }
},
(err: any) => {
  // 弹出错误消息
  message.error(err.message)
  return Promise.reject(err)
}
)

function clearObj(obj: any, filters: Array<any>) {
  Object.keys(obj).forEach(
    (key) => filters.includes(obj[key]) && delete obj[key]
  )
}

export default http
