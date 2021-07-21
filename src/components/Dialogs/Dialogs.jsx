import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink>
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
    /*DATA*/
    let DialogData = [
        {id: 1, name: "Vasya"},
        {id: 2, name: "Dasha"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Glasha"}
    ]

    let MessageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Welcome"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Where is my money?"},
        {id: 5, message: "I need my money"},
    ]
    /*Mapping*/
    let DialogElements = DialogData
        .map(dialog => <DialogItems name={dialog.name} id={dialog.id}/>)

    let MessageElement = MessageData
        .map(message => <Message message={message.message}/>)

    /*Function*/
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogElements}
            </div>
            <div className={classes.messages}>
                {MessageElement}
            </div>
        </div>
    );
}

export default Dialogs;