import {addMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogPageReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newMessageBody: () => {
            dispatch(addMessageCreator());
        },
        onNewMessageChange: (body) => {
            // let body = e.target.value;
            dispatch(updateNewMessageBodyCreator(body));
        }

    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;