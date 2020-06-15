import http from './http'

const loadResultApi = "/access/result"

function loadResult(dispatch){
  http.get(
    loadResultApi
  ).then(res => {
    const {errno} = res;
    const data = {
      percent: 70,
      suggests: [
        {content:'低流量吸氧', level: '1C'},
        {content:'转向低海拔地区', level: '1A'},
        {content:'使用便捷压力', level: '1B'},
      ],
      source: '简化版的环境症状问卷计分系统EQS-III'
    }
    if(errno === 0){
      console.log('success')
      dispatch({
        type: 'SET_RESULT',
        result: data || []
      })
    }
  })
}

export {loadResult}