import React from 'react'
const PostChat = () => {
    // Function to add a comment to a comment
    const addCommentToComment = async (parentId, newCommentData) => {
        try {
          const response = await fetch("https://test.touchapp.in/api/postComment", {
             method: 'POST',
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFtbXVjaGFyeSIsInVzZXJpZCI6NDY0NiwiaWF0IjoxNzAwMjA1NDc3fQ.0RESjwG_r1twIt8rEWa8FA-euaQool6Nc-bT6khQaZA",
              "Content-Type": "application/json",
              // Add any necessary authentication headers or tokens
            },
            body: JSON.stringify({
                post_id: "12140",
                reaction_id: "1",
                text: "Posting Comment",
                newCommentData
              }),
          });
      
          if (response.ok) {
            const data = await response.json();
            // Handle successful comment addition (e.g., update state, UI, etc.)
            console.log('Comment added:', data);
} else {
    // Handle errors
    console.error('Failed to add comment');
  }
} catch (error) {
  console.error('Error adding comment:', error);
}
};

// Example usage
const parentId = '12140'; // ID of the comment to which you want to reply
const newCommentData = {
text: 'This is a new comment on the comment!',
// Other relevant comment data
};

// Call the function to add a comment to a comment
addCommentToComment(parentId, newCommentData);


return (
<div style={{backgroundColor:"black",color:"white",height:"650px"}}></div>
)
}

export default PostChat