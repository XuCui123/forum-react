import './Topic.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Layout from '../components/Layout';

class Topic extends Component {
  componentDidMount() {
    const { match, dispatch } = this.props;
    dispatch({
      type: 'topic/item',
      payload: match.params.id
    });
  }
  render() {
    const { location, auth, topic } = this.props;
    return (
      <Layout location={location} auth={auth}>
        <div className="topic-page">
          <div>
            <h3>{topic.title}</h3>
            <p>{topic.content}</p>
          </div>
          <div>
            
          </div>
          <div></div>
        </div>
      </Layout>
    );
  }
}

const map = ({ auth, topic }) => {
  return { auth, topic: topic.item };
};
export default connect(map)(Topic);