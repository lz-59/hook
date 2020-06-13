import { FETCH_DEF_DATA } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function defaultData (options) {
  return {
    type: FETCH_DEF_DATA,
    payload: post(api.listData, options)
  }
}