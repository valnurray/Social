import React from "react";
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogPageReducer"
import {connect} from "react-redux";


const Dialogs = (props) => {

    // return <StoreContext.Consumer>
    //     {
    //         (store) => {
    let state = props.store.getState().DialogPage;
    //
    let DialogElements = state.DialogData
        .map(dialog => <DialogItems name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    //
    //
    let MessageElement = state.MessageData.map(message => <Message message={message.message}/>)
    //
    let newMessageBody = state.newMessageBody;
    //
    let newMessageElement = React.createRef();
    //
    //
    let onSendMessageClick = () => {
        props.store.dispatch(addMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <div className={classes.dialogs}>

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
    //         }
    //     }
    // </StoreContext.Consumer>


}

export default Dialogs;