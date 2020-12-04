import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

	let dialogsList = props.state.dialogsData.map((dialog, index) => {
		return <DialogItem  id={dialog.id} name={dialog.name} avatar={dialog.avatar} key={index}/>
	});

	let messageElement = props.state.messagesData.map((messageItem, index) => {
		return <Message id={messageItem.id} message={messageItem.message} key={index}/>
	});

	let newMessagesElement = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}

	let handleChange = (event) => {
		props.dispatch(updateNewMessageBodyCreator(event.target.value));
	}

	return (
		<div className={css.dialogs}>
			<ul className={css.dialogsList}>
				{dialogsList}
			</ul>

			<div className={css.messages}>
				<div className={css.messagesList}>
					{messageElement}
				</div>
				<textarea name="messages" id="" cols="30" rows="5" ref={newMessagesElement} onChange={handleChange} value={props.state.newMessageText}/>
				<button onClick={addMessage}>Send</button>
			</div>
		</div>
	);
}

export default Dialogs;