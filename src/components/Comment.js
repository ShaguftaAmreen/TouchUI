import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.author}: {comment.content}</p>
    </div>
  );
}

export default Comment;