import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

import Counter from '@unstated/counter'

import reducer from '@src/redux'

const { Provider } = Counter

const store = createStore(reducer)

import App from './App'

// ReactDOM.render(
//   <LocaleProvider locale={zhCN}>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </LocaleProvider>,
//   document.querySelector('#root') as HTMLElement,
// )


ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Provider initialState={2}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.querySelector('#root') as HTMLElement,
)

