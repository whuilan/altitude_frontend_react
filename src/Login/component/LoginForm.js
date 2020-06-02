import React from 'react';
import './LoginForm.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component{
  onFinish = values => {
    console.log('Received values of form: ', values);
    // eslint-disable-next-line no-unused-expressions
    this.props.history.push('/manage');
  };

  render(){
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default LoginForm;