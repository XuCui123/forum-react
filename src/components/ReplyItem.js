import React from 'react';
import { Link } from 'react-router-dom';
import ReplyItem from './ReplyItem.less';
import { timeAgo } from '../utils';

export default ({ reply }) => {
  return (
    <div className="reply-item">
      <div className="reply-title">
        <Link to={`/user/${reply.user.id}`}>{reply.user.nickname}</Link>
        <span className="time">{timeAgo(reply.createdAt)}</span>
      </div>
      <div className="reply-content">
        <span classNmae="content">{reply.content}</span>
      </div>
    </div>
  );
};