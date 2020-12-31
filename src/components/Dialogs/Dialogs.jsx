import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let dialogsList = props.dialogsData.map((dialog, index) => {
		return <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} key={index}/>
	});

	let messageElement = props.messageData.map((messageItem, index) => {
		return <Message id={messageItem.id} message={messageItem.message} key={index}/>
	});

	let newMessagesElement = React.createRef();

	let addMessage = () => {
		props.onAddMessage();
	}

	let handleChange = (e) => {
		props.onMessageChange(e.target.value);
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
				<textarea name="messages" id="" cols="30" rows="5" ref={newMessagesElement} onChange={handleChange}
				          value={props.newMessageText}/>
				<button onClick={addMessage}>Send</button>
			</div>
		</div>
	);
}

export default Dialogs;