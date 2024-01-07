import React, { useState } from "react";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

const PostComment = () => {
  const [postId, setPostId] = useState("");
  const [reactionId, setReactionId] = useState("");
  const [comments, setComment] = useState("");

  const handlePostIdChange = (event) => {
    setPostId(event.target.value);
  };

  const handleReactionIdChange = (event) => {
    setReactionId(event.target.value);
  };

 
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    // event.preventDefault();

    try {
      const response = await fetch("https://test.touchapp.in/api/postComment", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFtbXVjaGFyeSIsInVzZXJpZCI6NDY0NiwiaWF0IjoxNzAwMjA1NDc3fQ.0RESjwG_r1twIt8rEWa8FA-euaQool6Nc-bT6khQaZA",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: "12140",
          reaction_id: "1",
          text: "Posting Comment",
        }),
      });

      if (response.ok) {
        console.log("Comment posted successfully!");
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  return (
    // <form onSubmit={handleCommentSubmit} style={{backgroundColor:"black"}}>
    //   <label onClick={onHandleClick}>
    //     Post ID:
    //     <input type="text" value={postId} onChange={handlePostIdChange} />
    //   </label>
    //   <label>
    //     Reaction ID:
    //     <input
    //       type="text"
    //       value={reactionId}
    //       onChange={handleReactionIdChange}
    //     />
    //   </label>
    //   <label>
    //     Comment:
    //     <input value={comment} onChange={handleCommentChange} />
    //   </label>
    //   <button type="submit" style={{width:"150px"}}>Comment</button>
    // </form>
    <div>
      {/* <Comments comments={comments} /> */}
      <CommentForm  onCommentSubmit={handleCommentSubmit} />
    </div>
  );
};

export default PostComment;