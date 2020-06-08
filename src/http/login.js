import http from './http'

const loginApi = "/login"

function doLogin({username, password}, dispatch){
  http.post(
    loginApi,
    {username, password}
  ).then(res => {
    console.log(res)
    if(res.errno === 0){
      dispatch({
        type: 'DO_LOGIN',
        username,
        password
      })
    }
  }).catch(err => {
    console.log('错误：'+err)
  })
}

export default doLogin;