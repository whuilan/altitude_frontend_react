import { combineReducers } from 'redux'

// Reducers
import loginReducer from './loginReducer'
import manageReducer from './manageReducer'

// import todos from './todos'

const reducer = combineReducers({
  loginReducer,
  manageReducer,
})

export default reducer