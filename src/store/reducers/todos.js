
const TODOSKey = 'TODOS_KEY'
const defaultState = JSON.parse(localStorage.getItem(TODOSKey)) || [] // [{name:'learn', status:false}...

const todos = (state = defaultState, action) => {
  // console.log(state, action)
  const { type, name, index } = action
  let todos = state
  switch (type) {
    case 'ADD_TODO':
      todos = [
        ...state,
        {
          name,
          status: false
        }
      ]
      localStorage.setItem(TODOSKey, JSON.stringify(todos))
      return todos
    case 'TOGGLE_TODO':
      todos = state.slice()
      todos[index].status = !todos[index].status
      return todos
    case 'DELETE_TODO':
      todos = state.slice()
      todos.splice(index, 1)  
      localStorage.setItem(TODOSKey, JSON.stringify(todos))
      return todos
    default:
      return todos
  }
}

export default todos