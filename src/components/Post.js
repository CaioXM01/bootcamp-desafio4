import React from 'react';

import PostHeader from './PostHeader';
import PostComments from './PostComments';

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default Post;