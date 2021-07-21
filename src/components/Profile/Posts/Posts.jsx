import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {

    return <div className={classes.posts}>
        <h3>My Posts</h3>

        <div>
          <textarea>
          </textarea>
        </div>

        <button>
            Add post!
        </button>

        <div className={classes.post}>
            {props.postData}
        </div>
    </div>

}

export default Posts;