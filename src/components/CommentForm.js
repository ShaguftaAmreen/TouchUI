import React, { useState } from 'react';

const CommentForm = ({ onCommentSubmit }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(newComment);
    setNewComment('');
  }

  return (
  
    <button style={{borderRadius:"5px"}}>Submit</button>
  );
}

export default CommentForm;