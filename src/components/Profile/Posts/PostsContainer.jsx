import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        // props.addPost();
        // let text = newPostElement.current.value;
        props.store.dispatch(addPostActionCreator());
        // newPostElement.current.value = '';

    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch( action );

    }
    return (
        <Posts
            updateNewPosttext = {onPostChange}
            addPost ={addPost}
            postData = {state.ProfilePage.PostData}
            newPostText ={state.ProfilePage.newPostText}
        />);

}

export default PostsContainer;