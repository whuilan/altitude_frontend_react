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
    // 进入病人管理页面时默认获取病人列表or删除某个病人时重置patientList
    case 'SET_PATIENT_LIST':
      return {...state, patientList: action.patientList} 
    // 搜索时筛选出满足条件的病人
    case 'SEARCH_PATIENT':
      return {...state, filter: action.filterItems}
    case 'SET_CURRENT_PATIENT':
      return {...state, curPatient: action.selectedPatient}
    // 设置当前病人（在管理页面的table中选中or正在新增输入的病人）
    case 'UPDATE_CURRENT_PATIENT':
      const {name, value} = action;
      // 不要直接修改state
      const updatedCurPatient = { ...state.curPatient };
      updatedCurPatient[name] = value;
      return {...state, curPatient: updatedCurPatient}
    case 'CLEAR_CURRENT_PATIENT':
      return {...state, curPatient: {}}
    case 'SAVE_CURRENT_PATIENT':
      const {patientList} = action
      return {...state, patientList}
    default:
      return state;
  }
}

export default manageReducer;