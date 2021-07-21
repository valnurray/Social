import React from "react";
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    /*DATA*/


    /*Function*/
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.DialogElements}
            </div>
            <div className={classes.messages}>
                {props.MessageElement}
            </div>
        </div>
    );
}

export default Dialogs;