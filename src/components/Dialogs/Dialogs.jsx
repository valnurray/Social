import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to ={path} activeClassName={classes.active}> {props.name} </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.dialog + " " + classes.active}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItems name="Vasya" id="1"/>
                <DialogItems name="Dasha" id="2"/>
                <DialogItems name="Masha" id="3"/>
                <DialogItems name="Sasha" id="4"/>
                <DialogItems name="Glasha" id="5"/>
            </div>
            <div className={classes.messages}>
                <Message message = "Hi"/>
                <Message message = "Welcome"/>
                <Message message = "How are you?"/>
                <Message message = "Where is my money?"/>
                <Message message = "I need my money"/>
            </div>
        </div>
    );
}

export default Dialogs;