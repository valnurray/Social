import React from "react";
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    /*DATA*/
    let DialogElements = props.state.DialogData
        .map(dialog => <DialogItems name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)

    let MessageElement = props.state.MessageData
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