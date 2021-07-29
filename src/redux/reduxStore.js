import {combineReducers, createStore} from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    ProfilePage : profilePageReducer,
    DialogPage : dialogPageReducer,
    SideBar: sideBarReducer,
    UsersPage: usersReducer
});

let store = createStore(reducers);

// window.store = store;

export default store;