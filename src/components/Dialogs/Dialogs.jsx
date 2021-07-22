import React from "react";
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    /*DATA*/
    let DialogElements = props.state.DialogData
        .map(dialog => <DialogItems name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)

    let MessageElement = props.state.MessageData
        .map(message => <Message message={message.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    /*Function*/
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogElements}
            </div>
            <div className={classes.messages}>
                {MessageElement}
                <div>

            <textarea ref={newMessageElement}>
          </textarea>

                    <div>
                        <button onClick={addMessage}>
                            send
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dialogs;