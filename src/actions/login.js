import { FETCH_LOGIN } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function loginData (options) {
  return {
    type: FETCH_LOGIN,
    payload: post(api.signUp, options)
  }
}