import { combineReducers } from 'redux'
import CommonReducer from './CommonReducer'
import UserReducer from './UserReducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  common: CommonReducer,
  user:UserReducer,
  routing: routerReducer
})

export default rootReducer
