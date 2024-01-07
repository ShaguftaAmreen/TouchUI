import React, { useState, useRef } from 'react';
import axios from 'axios';

const CreatePost= () => {
  const [postFile, setPostFile] = useState(null);
  const [postType, setPostType] = useState('image');
  const [token, setToken] = useState(''); 
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPostFile(file);
  };

  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
  };

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postFile || !token) {
      alert('Please select a file and provide a valid token.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('post_file', postFile);
      formData.append('post_type', postType);

      const response = await axios.post('https://test.touchapp.in/api/createPost', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          },
          });

     
      console.log('Post created successfully', response.data);
       } catch (error) {
      // Handle any API request errors, e.g., show an error message
      console.error('Error creating the post', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{backgroundColor:"black",height:"650px"}}>
      <h2 style={{textAlign:"center",color:"white"}}>Create Post</h2>
      <form  style={{backgroundColor:"black",textAlign:"center"}} onSubmit={handleSubmit}
      >
      <div  style={{backgroundColor:"black",marginRight:"500px"}}>
        <label htmlFor="postFile" style={{marginLeft: "500px",color:"white"}}>Select File:</label>
        <input style={{backgroundColor:"black",marginLeft: "627px",color:"white"}}
          type="file"
          id="postFile"
          accept="image/, video/"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </div >
      <div  style={{backgroundColor:"black",marginRight:"500px"}}>
        <label style={{color:"white",marginLeft: "500px"}} htmlFor="postType">Post Type:</label>
        <select   style={{backgroundColor:"black",color:"white"}}id="postType" onChange={handlePostTypeChange} value={postType}>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div  style={{backgroundColor:"black",marginRight:"500px"}}>
        <label htmlFor="token" style={{marginLeft: "500px",color:"white"}}>Token:</label>
        <input  style={{backgroundColor:"black",marginLeft: "500px"}}
          type="text"
          id="token"
          value={token}
          onChange={handleTokenChange}
          placeholder="Enter your authentication token"
        />
      </div >
      <button style={{marginRight:"6px",paddingLeft:"10px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px",}}type="submit" disabled={loading}>
           {loading ? 'Creating Post...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
  };

export default CreatePost;