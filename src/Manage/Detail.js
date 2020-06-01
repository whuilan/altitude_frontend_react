import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import { Switch } from 'antd';
import './Detail.css'
import { Link } from 'react-router-dom';
import Result from './Result'

const basicInfoItems = [
  {
    label: "患者id",
    name: "pid",    // form提交后字段的key
    required: true, // 是否必填检验
    type: "input"   // 什么输入类型类型
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
    type: "select"
  },
  {
    label: "年龄",
    name: "age",
    required: true,
    type: "input"
  },
  {
    label: "民族",
    name: "nation",
    required: true,
    type: "input"
  },
  {
    label: "海拔",
    name: "altitude",
    required: true,
    type: "input"
  }
]

const diseaseInfoItems = [
  {
    label: "头痛",
    name: "headache",
    required: true,
    type: "switch"
  },
  {
    label: "头晕",
    name: "dizzy",
    required: true,
    type: "switch"
  },
  {
    label: "疲劳",
    name: "fatigue",
    required: true,
    type: "switch"
  },
  {
    label: "视力模糊",
    name: "blur",
    required: true,
    type: "switch"
  },
  {
    label: "平衡较差",
    name: "imbalance",
    required: true,
    type: "switch"
  },
  {
    label: "虚弱无力",
    name: "weak",
    required: true,
    type: "switch"
  },
  {
    label: "胃部不适",
    name: "stomachache",
    required: true,
    type: "switch"
  },
  {
    label: "食欲消退",
    name: "anorexia",
    required: true,
    type: "switch"
  },
]

const Detail = () => {
  // const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getBasicFields = () => {   
    const children = basicInfoItems.map((item, index) => (
      <Col span={8} key={item.name}>
          <Form.Item
            name={item.name}
            label={item.label}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
    ))
    return children;
  };

  const getDiseaseFields = () => {   
    const children = diseaseInfoItems.map((item, index) => (
      <Col span={8} key={item.name}>
          <Form.Item
            name={item.name}
            label={item.label}
          >
            <Switch defaultChecked />
          </Form.Item>
        </Col>
    ))
    return children;
  };

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      {/* 保存和查看评估结果的按钮区 */}
      <div className="top-button-area">
        <Button type="primary" htmlType="submit">保存</Button>
        <Button type="primary" style={{marginLeft:'20px'}}><Link to={<Result />}>查看评估结果</Link></Button>
      </div>

      {/* 基本信息输入区 */}
      <h3>基本信息</h3>
      <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getBasicFields()}</Row>
      {/* <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>        
        </Col>
      </Row> */}
    </Form>
    
    {/* 疾病信息录入区 */}
    <h3>症状信息</h3>
      <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getDiseaseFields()}</Row>
    </Form>

    </div>
  );
};

export default Detail;