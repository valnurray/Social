import React from "react";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css"

const Profile = () => {
    return <div >
        <img className={classes.profile} src="https://www.nasa.gov/images/content/174723main_LEFTBlueCUSun.jpg"/>

        <div>
            description
        </div>

        <div>
            description
        </div>

        <Posts/>


    </div>


}

export default Profile;