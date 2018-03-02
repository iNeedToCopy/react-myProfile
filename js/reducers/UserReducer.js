/**
 * Created by Aaron on 2017/11/7.
 */
import { handleAction, handleActions } from 'redux-actions'
import * as ActionTypes from '../constants/ActionTypes'

let initialState = {
}

export default handleActions({

  AT_OO_LIST_OK: (state, action) => ({
    ...state,
    c_oo_list: action.payload
  })
}, initialState)
