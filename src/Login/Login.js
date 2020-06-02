import React from 'react';
import { Modal } from 'antd';
import './Login.css'

import LoginForm from './component/LoginForm'

class Login extends React.Component {

  handleCancle = e => {
    this.props.onCancel(e);
  }

  render() {
    return (
        <Modal
          title="请登录"
          footer={null}
          visible={this.props.visible}
          onCancel={this.handleCancle}
        >
          <LoginForm history={this.props.history} />
        </Modal>      
    );
  }
}

export default Login;

