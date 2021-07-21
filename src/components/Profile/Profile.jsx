import React from "react";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Posts/Post/Post";


let PostData = [
    {id: 1, message: "Some message for post", like: 15},
    {id: 2, message: "Some different for post number 2", like: 10},
    {id: 3, message: "First post, i gues", like: 3}
]
let PostElement = PostData
    .map(post => <Post message={post.message} like={post.like}/>)


const Profile = () => {
    return (

        <div>
            <ProfileInfo/>
            <Posts postData ={PostElement}/>

        </div>
    );

}

export default Profile;