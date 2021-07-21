import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (

        <div>
            <div>
                <img className={classes.profile}
                     src="https://www.nasa.gov/images/content/174723main_LEFTBlueCUSun.jpg"/>
                <div/>
                <div className={classes.description}>
                    Desc + ava
                </div>
            </div>
        </div>
    );

}

export default ProfileInfo;