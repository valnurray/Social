import React from "react";
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().DialogPage;

    let DialogElements = state.DialogData
        .map(dialog => <DialogItems name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)




    // let MessageElement = state.newMessageBody;
    //     // .map(message => <Message message={message.message}/>)
    let MessageElement = state.MessageData.map(message => <Message message={message.message}/>)

    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

    // let addMessage = () => {
    //     let text = newMessageElement.current.value;
    //     alert(text);
    // }

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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

                <div>
                    <div>
                        <textarea placeholder="Enter your message"
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick = {onSendMessageClick} >Send </button>
                    </div>
                </div>

                {/*<textarea ref={newMessageElement}/>*/}

                {/*    <div>*/}
                {/*        <button onClick={addMessage}>*/}
                {/*            send*/}
                {/*    </button>*/}


                {/*    </div>*/}

                </div>
            </div>
        </div>
    );
}

export default Dialogs;