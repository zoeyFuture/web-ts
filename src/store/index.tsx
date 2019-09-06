import { combineReducers } from 'redux'

import counter from './counter'
import menus from './menus'

const reducers = combineReducers({
  counter,
  menus,
})

export default reducers
