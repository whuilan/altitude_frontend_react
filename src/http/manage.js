import http from './http'

const queryPatientListApi = "/patient/list"

function queryPatientList(dispatch){
  http.post(
    queryPatientListApi,
  ).then(res => {
    const { data } = res;
    dispatch({
      type: 'SET_PATIENT_LIST',
      patientList: data || []
    })
  })
}

export { queryPatientList };