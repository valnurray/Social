import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";

const Posts = (props) => {

    let postData = props.postData
        .map(post => <Post message={post.message} like={post.like}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
        // newPostElement.current.value = '';

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch( action );

    }

    return <div className={classes.posts}>
        <h3>My Posts</h3>

        <div>
          <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value= {props.newPostText}/>
        </div>

        <button onClick={addPost} >
            Add post!
        </button>

        <div className={classes.post}>
            {postData}
        </div>
    </div>

}

export default Posts;