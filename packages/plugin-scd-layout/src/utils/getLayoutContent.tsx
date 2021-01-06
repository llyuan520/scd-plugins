export default () => `\
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd/lib/menu';

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  menu: MenuProps;
  children: React.ReactNode;
  footer: string | React.ReactNode;
}

const ScdLayoutCom: React.FC<Props> = (props) => {
  const { menu, children, footer } = props;
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px' }} />
        {menu ? (
          menu
        ) : (
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        )}
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: '#fff' }}
        />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{ padding: 24, minHeight: 360, background: '#fff' }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{footer}</Footer>
      </Layout>
    </Layout>
  );
};

export const ScdLayout = (props) => <ScdLayoutCom {...props} />

`;
