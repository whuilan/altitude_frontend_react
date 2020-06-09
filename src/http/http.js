import axios from 'axios';
import { message } from 'antd';

const httpInstance = axios.create({
  baseURL: 'http://116.85.44.82:8090',
  timeout: 5000,
  headers: {
    'Content-Type': "application/json"
  }
})

httpInstance.interceptors.response.use(
  response => {
    const res = response.data;
    console.log(res) // {errno: 0, msg: "登录成功"}
    if(res.errno !== 0){
      message.error(res.msg)
    }
    return res;
  },
  error => {
    message.error(error.message);
    return Promise.reject(error)
  }
)

export default httpInstance;