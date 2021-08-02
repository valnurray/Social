const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    PostData: [
        {id: 1, message: "Some message for post", like: 15},
        {id: 2, message: "Some different for post number 2", like: 10},
        {id: 3, message: "First post, i gues", like: 3}
    ],
    newPostText: "new text from post",
    profile: null
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
                return{
                    ...state,
                    profile: action.profile
                }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type : ADD_POST});
export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profilePageReducer;