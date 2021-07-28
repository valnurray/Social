import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./DialogItem.module.css"


const DialogItems = (props) => {

    let path = "/dialogs/" + props.id;


    return (
        <div className={classes.dialog}>
            <img src = {props.avatar}/>
            <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink>
        </div>
    );
}

export default DialogItems;