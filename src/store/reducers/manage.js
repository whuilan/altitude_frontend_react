const defaultState = {
  patientList:[],
  filter: {
    pid: "",
    name: ""
  },
  curPatient: {}
}

function manageReducer(state = defaultState, action){
  console.log(action)
  const {type} = action;
  switch(type){
    // 进入病人管理页面时默认获取病人列表
    case 'SET_PATIENT_LIST':
      return {...state, patientList: action.patientList} 
    // 搜索时筛选出满足条件的病人
    case 'SEARCH_PATIENT':
      return {...state, filter: action.filterItems}
    default:
      return state;
  }
}

export default manageReducer;