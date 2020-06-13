import { FETCH_DEF_DATA } from '@/constants/actionTypes'
const defaultState = {
  data: []
}

export default function login (state = defaultState, action) {
  switch (action.type) {
    case FETCH_DEF_DATA:
      if (action.payload.code === 200) {
        state.data = action.payload.data.data
      }
      return { ...state, data: state.data }
    default: 
      return state 
  }
}