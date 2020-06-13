import { FETCH_REG } from '@/constants/actionTypes'
const defaultState = {
  code: 0,
}

export default function reg (state = defaultState, action) {
  switch (action.type) {
    case FETCH_REG:
      if (action.payload.code === 200) {
        state.code = action.payload.code
        console.log('注册成功');
      } else {
        console.log('注册失败')
      }
      return { ...state, code: state.code }
    default: 
      return state 
  }
}