import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (

        <div>
            <div>
                <img className={classes.profile}
                     src="https://www.nasa.gov/images/content/174723main_LEFTBlueCUSun.jpg"/>
                <div/>
                <div className={classes.description}>
                    <img src={props.profile.photos.large}/>
                    <div>
                        Desc + ava
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProfileInfo;