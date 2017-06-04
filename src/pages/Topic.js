import './Topic.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Pagination } from 'antd';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';
import ReplyForm from '../components/ReplyForm';
import ReplyItem from '../components/ReplyItem';

class Topic extends Component {
  componentDidMount() {
    const { match, dispatch } = this.props;
    const topicId = match.params.id;
    dispatch({
      type: 'topic/item',
      payload: topicId
    });
    dispatch({
      type: 'reply/list',
      payload: { topicId, offset: 0 }
    });
  }
  submit({ content }) {
    const { match, dispatch } = this.props;
    const topicId = match.params.id;
    dispatch({
      type: 'reply/add',
      payload: { topicId, content }
    });
  }
  render() {
    const { location, auth, topic, reply, match } = this.props;
    const topicId = match.params.id;
    const page = reply.offset / reply.limit;
    return (
      <Layout location={location} auth={auth}>
        <div className="topic-page">
          <div className="topic-body">
            <h3>{topic.title}</h3>
            <Markdown className="markdown-body" source={topic.content} />
          </div>
          <div>
            <ReplyForm onSubmit={(v) => this.submit(v)}/>
          </div>
          <div>
            {reply.list.map(item => (
              <ReplyItem reply={item} />
            ))}
          </div>
          <div className="topic-pager">
            <Pagination
              current={page}
              total={reply.count}
              defaultPageSize={reply.limit}
              onChange={page => dispatch({
                type: 'reply/list',
                payload: { offset: (page - 1) * reply.limit, topicId }
              })}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

const map = ({ auth, topic, reply }) => {
  return { auth, topic: topic.item, reply };
};
export default connect(map)(Topic);
