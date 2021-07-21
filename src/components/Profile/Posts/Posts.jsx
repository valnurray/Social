import React from "react";
import  classes from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {
  return  <div className = {classes.posts}>
      <h3>My Posts</h3>

      <div>
          <textarea>

          </textarea>
      </div>
      <button>
          Add post!
      </button>
      <div className={classes.post}>
      <Post message = 'Some message for post' like = '15'/>

      <Post message = 'Some different for post number 2' like = '10'/>

      <Post message = 'First post, i gues' like = '4'/>
      </div>
    </div>

}

export default Posts;