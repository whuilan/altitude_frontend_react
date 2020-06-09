const defaultState = {
  patientList:[],
  filter: {
    pid: "",
    name: ""
  },
  curPatient: {}
}

function manageReducer(state = defaultState, action){
  const {type, patientList = [], filter, patient} = action;
  switch(type){
    // 进入病人管理页面时默认获取病人列表
    case 'SET_PATIENT_LIST':
      return {...state, patientList} 
    // 搜索时筛选出满足条件的病人
    case 'SEARCH_PATIENT':
      let filteredPatientList;
      if(filter.pid){
        filteredPatientList = state.patientList.filter(patient => {
          return patient.pid === filter.pid;
        })
      }
      if(filter.name){
        filteredPatientList = state.patientList.filter(patient => {
          return patient.name === filter.name;
        })
      }
      return {...state, patientList: filteredPatientList};
    default:
      return state;
  }
}

export default manageReducer;