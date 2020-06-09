import { combineReducers } from 'redux'

// Reducers
import loginReducer from './login'
import manageReducer from './manage'

// import todos from './todos'

const reducer = combineReducers({
  loginReducer,
  manageReducer,
})

export default reducer