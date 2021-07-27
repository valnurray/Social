import {combineReducers, createStore} from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    ProfilePage : profilePageReducer,
    DialogPage : dialogPageReducer,
    SideBar: sideBarReducer
});

let store = createStore(reducers);

export default store;