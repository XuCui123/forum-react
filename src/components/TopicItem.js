import React from 'react';
import { Link } from 'react-router-dom';
import TopicItem from './TopicItem.less';
import { timeAgo } from '../utils';

export default ({ topic }) => {
  return (
    <div className="topic-item">
      <span className="user">{topic.user.nickname}</span>
      <Link className="title" to={'/topic/' + topic.id}>{topic.title}</Link>
      <span className="time">{timeAgo(topic.createdAt)}</span>
    </div>
  );
};