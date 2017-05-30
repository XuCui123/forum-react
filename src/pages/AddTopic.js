import './AddTopic.less';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Layout from '../components/Layout';
import TopicForm from '../components/TopicForm';

const AddTopic = ({ auth, dispatch, location }) => {
  const submit = (data) => {
    dispatch({
      type: 'topic/add',
      payload: data
    }).then((id) => {
      dispatch(push(`/topic/${id}`));
    });
  };
  return (
    <Layout location={location} auth={auth}>
      <div className="add-topic-page">
        <TopicForm onSubmit={submit} />
      </div>
    </Layout>
  );
};
const map = ({ auth }) => ({ auth });
export default connect(map)(AddTopic);