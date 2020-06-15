import React from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { connect } from 'react-redux';
import { Input, Select, Switch, DatePicker, Button, Row, Col, Form } from 'antd';
import { savePatient } from '../../http/manageHttp'
import { Link } from 'react-router-dom';

class NewAndDetail extends React.Component{

  handleUpdate = () => {
    console.log("更新前")
    // this.basicFormRef.current.setFieldsValue({name: '李一'})
    this.diseaseFormRef.current.setFieldsValue({poly: true})
    console.log("更新后")
  }

  dateFormat = 'YYYY-MM-DD'

  basicInfoItems = [
    {
      label: "患者id",
      name: "pid",
      required: true,
      type: "input"
    },
    {
      label: "姓名",
      name: "name",
      required: true,
      type: "input"
    },
    {
      label: "性别",
      name: "gender",
      required: true,
      type: "select",
      options: [
        "男",
        "女"
      ]
    },
    {
      label: "年龄",
      name: "age",
      required: true,
      type: "input"
    },
    {
      label: "电话号码",
      name: "phone",
      required: false,
      type: "input"
    },
    {
      label: "出生日期",
      name: "birthday",
      required: false,
      type: "date"
    },
    {
      label: "所属站点",
      name: "station",
      required: false,
      type: "input"
    }
  
  ]
  
  diseaseInfoItems = [
    {
      label: "真红细胞增多症",
      name: "poly",
      required: true,
      type: "switch"
    },
    {
      label: "慢性阻塞性肺病",
      name: "copd",
      required: true,
      type: "switch"
    }
  ]

  handleInputChange(name, value){
    this.props.dispatch({type:'UPDATE_CURRENT_PATIENT',name, value})
  }

  getFields = (items) => {
    const {curPatient} = this.props
    // console.log(curPatient["pid"])
    const { Option } = Select;
    const children = items.map(item => (
      <Col span={8} key={item.name}>
        <Form.Item
          name={item.name}
          label={item.label}
          rules={[
              {
                required: item.required,
                message: 'Input something!',
              },
            ]}
        >
          {
            item.type === 'input'
            ? <Input onChange={(e) => this.handleInputChange(item.name, e.target.value)} />
            : item.type === 'select'
            ? <Select onChange={value => this.handleInputChange(item.name, value)}>
                {item.options.map(option => <Option value={option} key={option}>{option}</Option>)}
            </Select>
            : item.type === 'switch'
            ? <Switch
               defaultChecked={curPatient[item.name]}
               onChange={checked => {this.handleInputChange(item.name, checked)}} />
            : item.type === 'date'
            ? <DatePicker
                // defaultValue={moment('2015/01/01', this.dateFormat)}
                format={this.dateFormat}
                onChange={(_, dateString) => this.handleInputChange(item.name, dateString)}
             />               
            : null
          }
        </Form.Item>
      </Col>
    ))
    return children;
  }

  render(){
    console.log("执行一次render()")
    const {curPatient, dispatch} = this.props
    console.log(curPatient)
    const birthday = curPatient['birthday'] ? moment(curPatient['birthday'], this.dateFormat) : null
    return (
      <div>
        {/* 按钮区 */}
        <Row justify="center" align="middle" gutter={16}>
          <Col span={4}>
            <Button type="primary" onClick={() => savePatient({patient: curPatient}, dispatch)}>保存</Button>
          </Col>
          <Col span={4}>
            <Button type="primary" disabled={curPatient.pid === undefined}><Link to={`/result/${curPatient.pid}`}>查看评估结果</Link></Button>
          </Col>
        </Row>

        {/* 基本信息输入表单 */}
        <h2>基本信息</h2>
        <Form
          initialValues={{...curPatient, birthday }}
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>{this.getFields(this.basicInfoItems)}</Row>
        </Form>

        {/* 疾病信息 */}
        <h2>症状信息</h2>
        <Form
          initialValues={curPatient}
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>{this.getFields(this.diseaseInfoItems)}</Row>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    curPatient: state.manageReducer.curPatient
  }
}

export default connect(mapStateToProps)(NewAndDetail)