import React from 'react'
import { Layout, Menu, Button } from 'antd'
import './Layout.css'
// Page Components
import LoginModal from './page/loginModal/loginModal'
import Home from './page/home/home'
import Manage from './page/manage/manage'
import NewAndDetail from './page/newAndDetail/newAndDetail'
import Result from './page/result/result'

// React-Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
const { Header, Footer, Content } = Layout;

// 图中的样式基本参考Antd官网 https://ant.design/components/layout-cn/
class MainLayout extends React.Component {
  handleVisible = () => {
    this.props.dispatch({type:"DO_VISIBLE"})
  }

  handleLogout = () => {
    this.props.dispatch({type:"DO_LOGOUT"})
  }

  handleMenuClick = (e) => {
    this.props.dispatch({type:'SELECT_MENU', route: e.key})
  }

  render() {
    const { username } = this.props.loginStatus;
    const { router } = this.props;

    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo">高原病风险评估系统</div>
            <div className="login">
              {
                username == null ?
                <Button onClick={this.handleVisible}>登录</Button> :
                <Button onClick={this.handleLogout}>您好，{username}</Button>              
              }
            </div>
            <Menu onClick={this.handleMenuClick} selectedKeys={router.route} defaultSelectedKeys={'home'} theme="dark" mode="horizontal" style={{ width: "70%" }}>
              <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
              <Menu.Item key="manage"><Link to="/manage">患者管理</Link></Menu.Item>
              <Menu.Item key="new" onClick={() => this.props.dispatch({type: 'CLEAR_CURRENT_PATIENT'})}><Link to="/new">新增患者</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className="site-layout">
          <div className="site-layout-background">
              <Route key="home" exact path="/" component={Home} />
              <Route key="route-home" path="/home" component={Home} />
              <Route key="route-manage" path="/manage" component={Manage} />
              <Route key="route-detail" path="/detail/:id" component={NewAndDetail} />
              <Route key="route-new" path="/new" component={NewAndDetail} />
              <Route key="route-result" path="/result/:id" component={Result} />
          </div>
          </Content>
          <Footer className="site-footer">Copyright @ZhejiangUniversity 2020</Footer>
          <LoginModal />
        </Layout>
      </Router>
    )
  }
}

function mapStatesToProps(state){
  return {
    loginStatus: state.loginReducer,
    router: state.routerReducer
  }
}

export default connect(mapStatesToProps)(MainLayout)
