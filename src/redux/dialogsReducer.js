const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let message = state.newMessageText;
			let newPost = {id: Math.random().toFixed(4), message};
			console.log(newPost);
			state.messagesData.push(newPost);
			state.newMessageText = '';
			return state;
		case CHANGE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.postText;
			return state;
		default:
			return state;
	};
};

export let addMessageActionCreator = () => ({type: ADD_MESSAGE});
export let updateNewMessageBodyCreator = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, postText: text});

export default dialogsReducer;