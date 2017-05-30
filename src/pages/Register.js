import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RegisterForm from '../components/RegisterForm';

const Register = ({ dispatch }) => {
  const submit = (data) => {
    dispatch({
      type: 'auth/register',
      payload: data
    }).then(() => {
      dispatch(push('/'));
    });
  }
  return (
    <Row type="flex" align="middle">
      <Col span={8} push={8}>
        <div className="login-main">
          <RegisterForm onSubmit={submit}/>
        </div>
      </Col>
    </Row>
  );
};

export default connect()(Register);
