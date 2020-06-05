import { createStore } from 'redux'
import reducer from '../reducers'

const store = createStore(reducer)

export function addTodoAction(name) {
  return {
    type: 'ADD_TODO',
    name
  }
}

export function deleteTodoAction (index) {
  return {
    type: 'DELETE_TODO',
    index
  }
}

export function toggleTodoAction(index) {
  return {
    type: 'TOGGLE_TODO',
    index
  }
}

export default store