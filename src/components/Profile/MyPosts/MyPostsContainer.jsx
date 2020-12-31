import React from 'react';
import {addPostActionCreator, changeTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.postData,
		newPostText: state.profilePage.newPostText,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {dispatch(addPostActionCreator());},
		updateNewPostText: (text) => {
			let action = changeTextActionCreator(text);
			dispatch(action);
		},
	}
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;