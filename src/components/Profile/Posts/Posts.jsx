import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {

    let PostData = [
        {id: 1, message: "Some message for post", like: 15},
        {id: 2, message: "Some different for post number 2", like: 10},
        {id: 3, message: "First post, i gues", like: 3}
    ]

    let PostElement = PostData
        .map(post => <Post message={post.message} like={post.like}/>)

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
            {PostElement}
        </div>
    </div>

}

export default Posts;