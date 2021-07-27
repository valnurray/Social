import React from "react";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Posts/Post/Post";
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (

        <div>
            <ProfileInfo/>
            <PostsContainer
                // store = {props.store}
                // postData={props.profilePage.PostData}
                // addPost={props.addPost}
                // newPostText={props.profilePage.newPostText}
                // dispatch={props.dispatch}
            />
        </div>
    );

}

export default Profile;