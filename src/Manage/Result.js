import React from 'react';
import { Progress } from 'antd';

const Result = () => {
  return (
    <div>
      <h2>预警概率</h2>
      <Progress percent={70} status="active" />
      <div>
        干预建议
      </div>
    </div>
  )
}

export default Result;