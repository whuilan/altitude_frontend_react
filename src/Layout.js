import React from 'react'
import { Layout, Menu } from 'antd'
import './Layout.css'
// Page Components
import Home from './page/home/home'
import Manage from './page/manage/manage'

// React-Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const { Header, Footer, Content } = Layout;

// 图中的样式基本参考Antd官网 https://ant.design/components/layout-cn/
class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo">高原病风险评估系统</div>
            <div className="login">登录</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ width: "70%" }}>
              <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
              <Menu.Item key="manage"><Link to="/manage">患者管理</Link></Menu.Item>
              <Menu.Item key="recruit"><Link to="/recruit">新增患者</Link></Menu.Item>
              {/* <Menu.Item key="todo"><Link to="/todo">TodoList</Link></Menu.Item> */}
            </Menu>
          </Header>
          <Content className="site-layout">
          <div className="site-layout-background">
              <Route key="route-home" path="/home" component={Home} />
              <Route key="route-manage" path="/manage" component={Manage} />
          </div>
          </Content>
          <Footer className="site-footer">Copyright @ZhejiangUniversity 2020</Footer>
        </Layout>
      </Router>
    )
  }

}

export default MainLayout
