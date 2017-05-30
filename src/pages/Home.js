import './Home.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import Layout from '../components/Layout';
import TopicItem from '../components/TopicItem';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'topic/list',
      payload: 0
    });
  }
  render() {
    const { location, auth, topic, dispatch } = this.props;
    const page = topic.offset / topic.limit;
    return (
      <Layout location={location} auth={auth}>
        <div className="home-page">
          <div className="topic-list">
            {topic.list.map(item => <TopicItem topic={item} />)}
          </div>
          <div className="topic-page">
            <Pagination
              current={page}
              total={topic.count}
              defaultPageSize={topic.limit}
              onChange={page => dispatch({
                type: 'topic/list',
                payload: (page - 1) * topic.limit
              })}
            />
          </div>
        </div>
      </Layout>
    );
  }
}
const map = ({ topic, auth }) => ({ topic, auth });
export default connect(map)(Home);