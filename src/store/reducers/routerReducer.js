const defaultState = {
  route: ''
}

function routerReducer(state = defaultState, action){
  console.log(action)
  const {type} = action
  switch(type){
    case 'SELECT_MENU':
      const {route} = action
      return {route}
    case 'SWITCH_ROUTE':
      const {pathname} = action
      if(pathname.includes('/manage') || pathname.includes('/detail') || pathname.includes('/result')){
        return {route: 'manage'}
      }
      else if(pathname.includes('/new')){
        return {route: 'new'}
      }
      else{
        return {route: 'home'}
      }
    default:
      return state
  }
}

export default routerReducer