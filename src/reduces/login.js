import { FETCH_LOGIN } from '@/constants/actionTypes'
const defaultState = {
  token: '',
  userData: {},
}

export default function login (state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      if (action.payload.code === 200) {
        state.token = action.payload.data.token
        state.userData = action.payload.data.userData
        console.log('登录成功');
      } else {
        console.log('登录失败')
      }
      return { ...state, token: state.token, userData: state.userData }
    default: 
      return state 
  }
}