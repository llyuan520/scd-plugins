import React from 'react';
import { Button } from 'antd';
import { ScdLayout } from 'umi';
import './global.less';

export default () => {
  return (
    <ScdLayout
      children={<Button type="button">Read ScdLayout</Button>}
      footer="Ant Design ©2018 Created by Ant UED"
    />
  );
};
