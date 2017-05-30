import './Login.less';
import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import LoginForm from '../components/LoginForm';

const Login = ({ dispatch }) => {
  const submit = (data) => {
    dispatch({
      type: 'auth/login',
      payload: data
    }).then(() => {
      dispatch(push('/'));
    });
  };
  return (
    <Row type="flex" align="middle">
      <Col span={6} push={9}>
        <div className="login-main">
          <LoginForm onSubmit={submit} />
        </div>
      </Col>
    </Row>
  );
};

export default connect()(Login);
