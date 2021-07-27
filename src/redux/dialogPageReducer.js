const UPDATE_NEW_MESSAGE_BODY ="UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE ="SEND-MESSAGE";

let initialState = {
    DialogData: [
        {
            id: 1,
            name: "Vasya",
            avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
        },
        {id: 2, name: "Dasha", avatar: "https://www.shareicon.net/data/2016/07/26/802029_user_512x512.png"},
        {
            id: 3,
            name: "Masha",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbL3JvY-tA1CPp-WD98USyXI4w8IIwVJbTtbOmEI1nFyGAjoqBiMuWiZpKlc9ru4pbNM&usqp=CAU"
        },
        {
            id: 4,
            name: "Sasha",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhyuGOYIZUYYfyN3QtOnOMUbD5oPRQMOVnKij2IqJSEAdyFWAeZpaxGgbdg28J4Ch0Iw&usqp=CAU"
        },
        {
            id: 5,
            name: "Glasha",
            avatar: "https://www.shareicon.net/data/512x512/2016/05/24/770088_people_512x512.png"
        }
    ],
    MessageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Welcome"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Where is my money?"},
        {id: 5, message: "I need my money"}
    ],

    newMessageBody: ""
}

const dialogPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.MessageData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type : SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogPageReducer;