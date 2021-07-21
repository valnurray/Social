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

    let DialogData = [
        {id : 1, name : "Vasya"},
        {id : 2, name : "Dasha"},
        {id : 3, name : "Masha"},
        {id : 4, name : "Sasha"},
        {id : 5, name : "Glasha"}
    ]

    let MessageData = [
        {id : 1, message : "Hi"},
        {id : 2, message : "Welcome"},
        {id : 3, message : "How are you?"},
        {id : 4, message : "Where is my money?"},
        {id : 5, message : "I need my money"},
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItems name= {DialogData[0].name} id={DialogData[0].id}/>
                <DialogItems name= {DialogData[1].name} id={DialogData[1].id}/>
                <DialogItems name= {DialogData[2].name} id={DialogData[2].id}/>
                <DialogItems name= {DialogData[3].name} id={DialogData[3].id}/>
                <DialogItems name= {DialogData[4].name} id={DialogData[4].id}/>
            </div>
            <div className={classes.messages}>
                <Message message ={MessageData[0].message}/>
                <Message message ={MessageData[1].message}/>
                <Message message ={MessageData[2].message}/>
                <Message message ={MessageData[3].message}/>
                <Message message ={MessageData[4].message}/>
            </div>
        </div>
    );
}

export default Dialogs;