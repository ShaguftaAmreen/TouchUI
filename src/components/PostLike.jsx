import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PostLike = () => {
  const [postId, setPostId] = useState("");
  const [reaction, setReaction] = useState("");
  const [token, setToken] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      const response = await fetch("https://test.touchapp.in/api/postLike", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFtbXVjaGFyeSIsInVzZXJpZCI6NDY0NiwiaWF0IjoxNzAwMjA1NDc3fQ.0RESjwG_r1twIt8rEWa8FA-euaQool6Nc-bT6khQaZA",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post_id: "12140", reaction_id: "0" }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setIsLiked(true);
      } else {
        console.error("Error liking the post:", response.status);
      }
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };
  // handleLike();
  useEffect(() => {
    handleLike()
  }, [])
  

  return (
    <div >
      {/* <label>
        Post ID:
        <input
          type="text"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Reaction:
        <input
          type="text"
          value={reaction}
          onChange={(e) => setReaction(e.target.value)}
 />
      </label>
      <br />
      <label>
        Token:
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </label> */}
      <br />
      <button style={{borderRadius:"5px",backgroundColor:"white",color:"black",marginBottom:"12px"}} onClick={handleLike} disabled={isLiked}>
        {isLiked ? "Liked!" : "Like"}
      </button>
      <p>
        <span>
          <Link to="/postcomment" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg></Link>      
        </span>
      </p>
    </div>
  );
};

export default PostLike;