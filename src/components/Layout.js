import './Layout.less';
import React from 'react';
import { Menu, Icon, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

function Header({ location, auth }) {
  const menus = [{
    key: '/',
    name: '首页'
  }];
  if (auth.isLogin) {
    menus.push({
      isNormal: true,
      key: '/logout',
      name: '退出'
    });
  } else {
    menus.push({
      key: '/login',
      name: '登录'
    });
    menus.push({
      key: '/register',
      name: '注册'
    });
  }
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      {menus.map(item => (
        <Menu.Item key={item.key}>
          {item.isNormal ? <a href={item.key}>{item.name}</a> : <Link to={item.key}>{item.name}</Link>}
        </Menu.Item>
      ))}
    </Menu>
  );
}

function Layout({ children, location, auth }) {
  return (
    <div className="page-wrapper">
      <Header location={location} auth={auth} />
      <div className="main-wrapper">
        <Row gutter={15}>
          <Col span={18}>{children}</Col>
          <Col span={6}>
            <div className="sider">
              <Button type="primary">
                <Link to="/topic/create">发布话题</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Layout;