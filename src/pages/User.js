import './User.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Pagination } from 'antd';
import Layout from '../components/Layout';
import TopicItem from '../components/TopicItem';

class User extends Component {
  componentDidMount() {
    const { match, dispatch } = this.props;
    const userId = match.params.id;
    dispatch({
      type: 'user/item',
      payload: userId
    });
    dispatch({
      type: 'user/topics',
      payload: userId
    });
  }
  render() {
    const { location, auth, user, topics, match } = this.props;
    const userId = match.params.id;
    return (
      <Layout location={location} auth={auth}>
        <div className="user-page">
          <div className="user-body">
            <h3>hello</h3>
            <p>昵称：{user.nickname}</p>
            <p>用户名：{user.username}</p>
          </div>
          <div className="topic-list">
            {topics.map(item => <TopicItem topic={item} />)}
          </div>
        </div>
      </Layout>
    );
  }
}

const map = ({ auth, user }) => {
  return { auth, user: user.item, topics: user.topics };
};
export default connect(map)(User);
