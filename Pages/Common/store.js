import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { persistReducer, persistStore, } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
// import storage from 'redux-persist/lib/storage'
import storage from '@react-native-community/async-storage'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import list_data from './reducer'


const rootReducer = combineReducers({
  list_data
})
  
  const rootPersistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
  }
  
  const store = createStore(
    persistReducer(rootPersistConfig, rootReducer),
    compose(applyMiddleware(thunk, logger))
  )
  
  const persistor = persistStore(store)
  
  export { store, persistor }