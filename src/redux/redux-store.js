import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import sidebarReducer from "./sidebarReducer";
import blogReducer from "./blogReducer";
import userbarReducer from "./userbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
	usersList: usersReducer,
	profilePage: profileReducer,
	musicPage: musicReducer,
	dialogsPage: dialogsReducer,
	blogPage: blogReducer,
	newsPage: newsReducer,
	userData: userbarReducer,
	sidebar: sidebarReducer,
	authData: authReducer,
});

let store = createStore(reducers);
export default store;