import React from "react";
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.DialogPage;

    let DialogElements = state.DialogData
        .map(dialog => <DialogItems name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar}/>);

    let MessageElement = state.MessageData.map(message => <Message message={message.message} key={message.id}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.newMessageBody();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body);
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {DialogElements}
            </div>

            <div className={classes.messages}>
                {MessageElement}
                <div>

                    <div>
                        <div>
                        <textarea placeholder="Enter your message"
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}
                        />
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );


}

export default Dialogs;