import React from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './loginModal.css'
import { connect } from 'react-redux';

// 登录http请求
import doLogin from '../../http/login'

class LoginModal extends React.Component{

  handleLogin = (values) => {
    console.log(values) // {username: "admin", password: "admin"}
    doLogin(values, this.props.dispatch)
    // 伪登录
    // this.props.dispatch({type:'DO_LOGIN', ...values})
  }

  handleCancel = () => {
    this.props.dispatch({type:'DO_HIDDEN'})
  }

  render(){
    const { visible } = this.props.login
    return (
      <Modal
          title="请登录"
          visible={visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <Form
            name="normal_login"
            className="login-form"
            onFinish={this.handleLogin}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input
               prefix={<UserOutlined className="site-form-item-icon" />}
               placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>            

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.loginReducer
  }
}

export default connect(mapStateToProps)(LoginModal);