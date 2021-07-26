
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY ="UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE ="SEND-MESSAGE";


let store = {
    _callSubscriber() {
        console.log("state is change!")
    },
    _state: {

        ProfilePage: {
            PostData: [
                {id: 1, message: "Some message for post", like: 15},
                {id: 2, message: "Some different for post number 2", like: 10},
                {id: 3, message: "First post, i gues", like: 3}
            ],
            newPostText: "new text from post"
        },
        DialogPage: {
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
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.ProfilePage.newPostText,
                like: 100
            };
            this._state.ProfilePage.PostData.push(newPost);
            this._state.ProfilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.DialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body =  this._state.DialogPage.newMessageBody;
            this._state.DialogPage.newMessageBody = '';
            this._state.DialogPage.MessageData.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () => ({type : ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageCreator = () => ({type : SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default store;
window.store = store;


// let reRenderTree = () => {
//     console.log("state is change!")
// }

// let state = {
//
//     ProfilePage:{
//         PostData: [
//             {id: 1, message: "Some message for post", like: 15},
//             {id: 2, message: "Some different for post number 2", like: 10},
//             {id: 3, message: "First post, i gues", like: 3}
//         ],
//         newPostText: "new text from post"
//     },
//     DialogPage:{
//         DialogData: [
//             {id: 1, name: "Vasya", avatar:"https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"},
//             {id: 2, name: "Dasha", avatar:"https://www.shareicon.net/data/2016/07/26/802029_user_512x512.png"},
//             {id: 3, name: "Masha", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbL3JvY-tA1CPp-WD98USyXI4w8IIwVJbTtbOmEI1nFyGAjoqBiMuWiZpKlc9ru4pbNM&usqp=CAU"},
//             {id: 4, name: "Sasha", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhyuGOYIZUYYfyN3QtOnOMUbD5oPRQMOVnKij2IqJSEAdyFWAeZpaxGgbdg28J4Ch0Iw&usqp=CAU"},
//             {id: 5, name: "Glasha", avatar:"https://www.shareicon.net/data/512x512/2016/05/24/770088_people_512x512.png"}
//         ],
//         MessageData: [
//             {id: 1, message: "Hi" },
//             {id: 2, message: "Welcome"},
//             {id: 3, message: "How are you?"},
//             {id: 4, message: "Where is my money?"},
//             {id: 5, message: "I need my money"}
//         ]
//     }
// }
// export const addPost = () => {
//     let newPost = {
//         id: 4,
//         message: state.ProfilePage.newPostText,
//         like: 100
//     };
//     state.ProfilePage.PostData.push(newPost);
//     updateNewPostText("");
//     reRenderTree(state);
// }

// export const updateNewPostText = (newText) => {
//     state.ProfilePage.newPostText = newText;
//     reRenderTree(state);
// }

// export const subscribe = (observer) => {
//     reRenderTree = observer;
// }


