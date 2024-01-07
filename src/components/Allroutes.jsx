import React from 'react'
import {Routes,Route} from "react-router-dom"
import VerifyOTP from './VerifyOTP'
import SignUp from './SignUp'
import Login from './Login'
import Forget from './Forget'
import CreatePost from './CreatePost'
import GetFeeds from './GetFeeds'
import PostLikeButton from './PostLike'
import PostComment from './PostComment'
import PostChat from './PostChat'

const Allroutes = () => {
  return (<div style={{textAlign:"center"}}>
    <Routes>
        <Route path='/otp' element={<VerifyOTP/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/forget' element={<Forget/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path='/getfeeds' element={<GetFeeds/>}/>
        <Route path='/postlike' element={<PostLikeButton/>}/>
        <Route path='/postcomment' element={<PostComment/>}/>
        <Route path='/postchat' element={<PostChat/>}/>
    </Routes></div>
  )
}
export default Allroutes;
/*import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import CreatePost from './CreatePost';
import GetFeeds from './GetFeeds';
import PostLike from './PostLike';
import PostComment from './PostComment';
import PostChat from './PostChat';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/getfeeds" element={<GetFeeds />} />
      <Route path="/postlike" element={<PostLike />} />
      <Route path="/comment" element={<PostComment />} />
      <Route path="/postchat" element={<PostChat />} />
    </Routes>
  );
}

export default AllRoutes;*/


 
 /*import React from 'react';
 import { Routes, Route } from 'react-router-dom';
 import Login from './Login.jsx';
 import ForgotPassword from './ForgotPassword.jsx';
 import CreatePost from './CreatePost.jsx';
 import GetFeeds from './GetFeeds.jsx';
 import PostLike from './PostLike.jsx';
 import PostComment from './PostComment.jsx';
 import PostChat from './PostChat.jsx';
 import SignUp from './SignUp.jsx';

function AllRoutes() { 
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
<Route path='/' element={<Login />} />
<Route path='/forgotpassword' element={<ForgotPassword />} />
<Route path='/createpost' element={<CreatePost />} />
<Route path='/getfeeds' element={<GetFeeds />} />
<Route path='/postlike' element={<PostLike />} />
<Route path='/comment' element={<PostComment />} />
<Route path='/postchat' element={<PostChat />} />
</Routes>
  );
}

export default AllRoutes;*/