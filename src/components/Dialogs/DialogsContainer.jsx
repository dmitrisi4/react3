import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogsPage.dialogsData,
		messageData: state.dialogsPage.messagesData,
		newMessageText: state.dialogsPage.newMessageText,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		onAddMessage: () => {dispatch(addMessageActionCreator());},
		onMessageChange: (text) => {
			let action = updateNewMessageBodyCreator(text);
			dispatch(action);
		}
	}
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;