import { message } from "antd";

const USERKEY = 'USER_KEY';
const defaultUser = JSON.parse(localStorage.getItem(USERKEY)) || {} // {username:"admin", password:"admin"}

function loginReducer(state={...defaultUser, visible: false}, action){
  // console.log(action) // {type: "DO_VISIBLE"}, {type: "DO_LOGIN", username: "admin", password: "admin"}
  const { type, username, password } = action;
  // console.log(type, username, password) // DO_VISIBLE undefined undefined, DO_LOGIN admin admin
  switch(type){
    case 'DO_VISIBLE': // 用户点击登录导航栏的登录
      return { ...defaultUser, visible: true } 
    case 'DO_HIDDEN': // 用户点击登录模态框的'X'，或者输入用户名和密码之后验证成功需要关闭登录模态框
      return {...defaultUser, visible: false } 
    case 'DO_LOGIN' : // 用户输入用户名和密码之后点击登录进行验证
      const user = {username, password};
      message.success('登录成功！')
      localStorage.setItem(USERKEY, JSON.stringify(user))
      return {...user, visible: false}
    case 'DO_LOGIN_FAILED':
      message.error('登录失败，用户名或密码错误！')
      return state;
    case 'DO_LOGOUT':
      message.success('退出成功！')
      localStorage.removeItem(USERKEY)
      return {visible: false}
    default:
      return state;
  }
}

export default loginReducer;