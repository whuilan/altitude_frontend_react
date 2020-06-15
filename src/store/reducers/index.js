import { combineReducers } from 'redux'

// Reducers
import loginReducer from './loginReducer'
import routerReducer from './routerReducer'
import manageReducer from './manageReducer'
import resultReducer from './resultReducer'

// import todos from './todos'

const reducer = combineReducers({
  loginReducer,
  routerReducer,
  manageReducer,
  resultReducer,
})

export default reducer