import { combineReducers } from 'redux'

// Reducers
import loginReducer from './loginReducer'
import manageReducer from './manageReducer'
import resultReducer from './resultReducer'

// import todos from './todos'

const reducer = combineReducers({
  loginReducer,
  manageReducer,
  resultReducer,
})

export default reducer