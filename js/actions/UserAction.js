/**
 * Created by Aaron on 2017/11/7.
 */
import {createAction, handleAction, handleActions} from 'redux-actions'
import Cookie from 'react-cookie'
import * as ActionTypes from '../constants/ActionTypes'
import * as Api from '../constants/Api'
import Empty from '../utils/emptyUtils'
import {myFetch} from '../utils/netUtils'


export const acOoListOk = createAction(ActionTypes.AT_OO_LIST_OK)
export function acAsyncOoList(params) {
  var fd = new FormData()
  return (dispatch, getstate) => {
    return myFetch(Api.API_OO_LIST, {
      method: 'POST',
      body: fd
    })
      .then(response => JSON.parse(response))
      .then(json => {
        if (json.code === 0) {
          dispatch(acOoListOk(json.desc))
        }
      }).catch(err => {
        console.log('request failed', err)
        throw err
      })
  }
}
