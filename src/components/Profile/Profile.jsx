import React from "react";
import Posts from "./Posts/Posts";
import  classes from "./Profile.module.css"

const Profile = () => {
  return <div className= {classes.content} >
    <img src="https://www.nasa.gov/images/content/174723main_LEFTBlueCUSun.jpg" />
    
    <div className = {classes.discription}>
      discription
    </div>
   
    <div className = {classes.discription}>
      discription
    </div>

    <Posts/>


  </div>


}

export default Profile;