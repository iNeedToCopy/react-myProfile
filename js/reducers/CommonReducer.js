import { handleAction, handleActions } from 'redux-actions'
import * as ActionTypes from '../constants/ActionTypes'
import * as Common from '../constants/Common'

let initialState = {
  s_refresh: false
}

export default handleActions({

  AT_REFRESH_ON: (state, action) => ({
    ...state,
    s_refresh: true
  }),

  AT_REFRESH_OFF: (state, action) => ({
    ...state,
    s_refresh: false
  }),

}, initialState)
