import React from 'react';
import { Layout, Menu, Button } from 'antd';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './Login/Login'
import Home from './Home/Home'
import Manage from './Manage/Manage'
import Detail from './Manage/Detail'

const { Header, Content, Footer } = Layout;

class App extends React.Component{
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  render(){
    return (
      <Router>
        <Layout>
          <Header>
            <div className="logo">病例管理系统</div>
            <div className="login"> 
              <Button onClick={this.showModal}>登录</Button>
              <Login 
                visible={this.state.visible}
                onCancel={this.handleCancel}
              />            
            </div>
            <Menu theme="dark" mode="horizontal" style={{marginLeft:'14%'}} defaultSelectedKeys={['home']}>
              <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
              <Menu.Item key="manage"><Link to="/manage">病例管理</Link></Menu.Item>
              <Menu.Item key="generate"><Link to="/detail">新建病例</Link></Menu.Item>
            </Menu>        
          </Header>
          <Content className="layout-content">
            <Switch>
              <Route path='/home'><Home /></Route>
              <Route path='/manage'><Manage /></Route>
              <Route path='/detail'><Detail /></Route>
            </Switch>
          </Content>
          <Footer className="layout-footer">Copyright @Zhejiang University 2020</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;