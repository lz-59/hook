import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage' 
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { login, reg, home } from '@/reduces'

const rootPersistConfig = {
  key: 'auto',
  storage,
  stateReconciler:autoMergeLevel2,
  whitelist: ['login','home'],
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    login,
    home,
    reg,
  })
)
const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(promise,thunk))
)

export default store