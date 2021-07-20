import React from "react";
import  classes from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {
  return  <div className = {classes.posts}>
      Posts

      <Post message = 'Some message for post' like = '15'/>

      <Post message = 'Some different for post number 2' like = '10'/>

      <Post message = 'First post, i gues' like = '4'/>

    </div>

}

export default Posts;