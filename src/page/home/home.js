import React from 'react'
import { Row, Col, Button } from 'antd';
import MyCarousel from './components/carousel'
import './home.css'
import { Link } from 'react-router-dom';

class Home extends React.Component{
  render(){
    return (
      <Row justify="space-between" style={{marginTop:'30px'}}>
        <Col span={14}>
          <MyCarousel />
        </Col>
        <Col span={9}>
          <div>
            <div>
              <h2>关于高原病</h2>
              <p>高原病mountain sickness 由平原进入高原（海拔3000米以上，对机体产生明显生物效应的地区），或由低海拔地区进入海拔更高的地区时 ，由于对低氧环境的适应能力不全或失调而发生的综合征。又称高山病。高原低氧环境引起机体缺氧是其病因。上呼吸道感染、疲劳、寒冷、精神紧张、饥饿、妊娠等为发病诱因 。</p>
              <h2>我们的系统</h2>
              <ul>
                <li>简洁直观刻画高原生命体征</li>
                <li>进行个性化高原风险评估</li>
                <li>提供细致科学的干预建议</li>
                <li>查看权威全面的知识图谱</li>
              </ul>
            </div>
            <Button type="primary">
              <Link to="/manage">开始风险评估</Link>
            </Button>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Home;