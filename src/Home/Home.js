import React from 'react';
import './Home.css';
import { Row, Col, Button } from 'antd';
import MyCarousel from './components/Carousel'

class Home extends React.Component{
    render(){
        return (
          <Row justify="space-between">
            <Col span={14}>
              <MyCarousel />
            </Col>
            <Col span={9}>
              <div>
                <div>
                  <h2>关于本系统</h2>
                  <p>此处为本系统的简要介绍...</p>
                </div>
                <Button type="primary">
                  开始决策支持
                </Button>
              </div>
            </Col>
          </Row>
          // <div className="home">
          //   <div className="carousel">
          //     <MyCarousel />
          //   </div>
          //   <div className="description">
          //     <p>关于高原病...</p> 
          //   </div>
          // </div>
        )
    }
}

export default Home;