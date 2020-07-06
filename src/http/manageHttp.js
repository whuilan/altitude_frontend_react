import http from './http'
import { message } from 'antd'

const queryPatientListApi = "/patient/list"
const deletePatientApi = "/patient/delete"
const savePatientApi = "/patient/save"

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

function deletePatientById(pid, dispatch){
  http.post(
    deletePatientApi,
    {pid}
  ).then(res => {
    const {data} = res;
    dispatch({
      type:'SET_PATIENT_LIST',
      patientList: data || []
    })
  })
}

function savePatient({patient}, dispatch){
  http.post(
    savePatientApi,
    {patient}
  ).then(res => {
    const {errno, data} = res;
    if(errno === 0){
      message.success("保存成功！")
      dispatch({
        type: 'SET_PATIENT_LIST',
        patientList: data || []
      })
    }
  })
}

export { queryPatientList, deletePatientById, savePatient };