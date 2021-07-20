import React from "react";
import classes from "./Items.module.css";

const Items = () => {
    return <div>
        <div className={classes.item}>
            <a href="/profile">Profile</a>
        </div>

        <div className={classes.item}>
            <a href="/dialogs"> Messages</a>
        </div>

        <div className={classes.item}>
            <a href="/news"> News</a>
        </div>

        <div className={classes.item}>
            <a href="/music"> Music</a>
        </div>

        <div className={classes.item}>
            <a href="/settings"> Settings</a>
        </div>
    </div>
}

export default Items;