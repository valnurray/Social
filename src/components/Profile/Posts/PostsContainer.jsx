import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = (props) => {

    // let state = props.store.getState();


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        // props.addPost();
                        // let text = newPostElement.current.value;
                        store.dispatch(addPostActionCreator());
                        // newPostElement.current.value = '';

                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);

                    }
                    return <Posts
                        updateNewPosttext={onPostChange}
                        addPost={addPost}
                        postData={state.ProfilePage.PostData}
                        newPostText={state.ProfilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    );

}

export default PostsContainer;