import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import { Table } from 'antd';
import './manage.css'
import { connect } from 'react-redux';

import { queryPatientList, deletePatientById } from '../../http/manageHttp'
import { Link } from 'react-router-dom';

class Manage extends React.Component{

  // TODO：深入理解react生命周期
  componentDidMount(){
    // 防止刷新后导航栏选中样式出错
    const { pathname } = window.location
    this.props.dispatch({type: 'SWITCH_ROUTE', pathname})
    this.props.dispatch({type: 'CLEAR_CURRENT_PATIENT'})
    queryPatientList(this.props.dispatch)
  }

  // 在数据库中搜索特定病人时可以设置的搜索条件
  searchItems = [
    {
      label: '患者ID',
      name: 'pid'
    },
    {
      label: '姓名',
      name: 'name'
    }
  ]

  handleSelect = (selectedPatient) => {
    // console.log(selectedPatient)
    this.props.dispatch({type: 'SET_CURRENT_PATIENT', selectedPatient})
  }

  // 病人列表展示的病人信息条目
  columns = [
    {
      title: '患者id',
      dataIndex: 'pid',
      key: 'pid',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: '出生日期',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '所属哨所',
      dataIndex: 'station',
      key: 'station',
    },
    {
      title: '操作',
      key: 'operation',
      render: (_, record) => (
        <div>
          <Button type='primary' key={`detail-${record.pid}`} onClick={() => {this.handleSelect(record)}}><Link to={`/detail/${record.pid}`}>详情</Link></Button>
          <Button type='primary' key={`delete-${record.pid}`} style={{marginLeft:'2px'}} onClick={() => deletePatientById(record.pid, this.props.dispatch)}>删除</Button>
        </div>
      ),
    },
  ]

  getSearchFields = () => {
    const children = this.searchItems.map(item => (
      <Col span={8} key={item.name}>
        <Form.Item
          name={item.name}
          label={item.label}
        >
          <Input placeholder={`根据${item.label}搜索`} />
        </Form.Item>
      </Col>
    ))
    return children;
  }

  handleSearch = (values) => {
    this.props.dispatch({type: 'SEARCH_PATIENT', filterItems: values})
    // console.log('Received values of form: ', values);
  }

  render(){
    // 将要显示的病人列表初始化为包含全部病人的病人列表
    let filteredPatientList = this.props.patientList;
    const filter = this.props.filter;
    if(filter.pid){
      filteredPatientList = filteredPatientList.filter(patient => {
        return patient.pid === filter.pid;
      })
    }
    if(filter.name){
      filteredPatientList = filteredPatientList.filter(patient => {
        return patient.name === filter.name;
      })
    }

    return (
      <div>
        <Form
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={this.handleSearch}
        >
          <Row gutter={24}>{this.getSearchFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                搜索
              </Button>             
            </Col>
          </Row>
        </Form>
        <h2 style={{marginTop:'10px'}}>病人列表</h2>
        <Table columns={this.columns} dataSource={filteredPatientList} />
      </div>
    )
  }
}

function mapStatesToProps(state){
  return {
    patientList: state.manageReducer.patientList,
    filter: state.manageReducer.filter
  }
}

export default connect(mapStatesToProps)(Manage);