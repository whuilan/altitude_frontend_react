import React from 'react';
import { Row, Col } from 'antd';
import { Progress } from 'antd';
import { Table } from 'antd';
import { connect } from 'react-redux';

import { loadResult } from '../../http/resultHttp'

class Result extends React.Component{

  columns = [
    {
      title: '干预建议',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '建议等级',
      dataIndex: 'level',
      key: 'level',
    },
  ]

  componentDidMount(){
    // 页面第一次渲染就向后台请求结论
    loadResult(this.props.dispatch)
  }
  

  render(){
    const {percent, suggests, source} = this.props.result

    return (
      <div>
        <Row>
          <Col flex="100px"><h3>预警概率：</h3></Col>
          <Col flex="auto">
          <Progress percent={percent} strokeColor={percent > 50 ? 'red' : 'blue'} />
          </Col>
        </Row>
        <Table columns={this.columns} dataSource={suggests} pagination={{hideOnSinglePage: true}} />
        <h3>{`诊断来源： ${source}`}</h3>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    result: state.resultReducer
  }
}

export default connect(mapStateToProps)(Result)