const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
	dialogsData: [
		{
			id: 1,
			name: 'Dimasta',
			avatar: 'https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg'
		},
		{
			id: 2,
			name: 'bot',
			avatar: 'https://cdn.vox-cdn.com/thumbor/UNwAJoM8e6nbSuBccxj_33Ca7eM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22005398/disney_robot.jpg'
		},
		{id: 3, name: 'saved', avatar: 'https://static.thenounproject.com/png/451502-200.png'},
	],

	messagesData: [
		{id: Math.random().toFixed(4), message: 'Hi'},
		{id: Math.random().toFixed(4), message: 'Ku'},
		{id: Math.random().toFixed(4), message: 'Privet'},
	],

	newMessageText: 'keks',
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let message = state.newMessageText;
			return {
				...state,
				newMessageText: '',
				messagesData: [...state.messagesData, {id: Math.random().toFixed(4), message}]
			}
		case CHANGE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.postText
			}
		default:
			return state;
	};
};

export let addMessageActionCreator = () => ({type: ADD_MESSAGE});
export let updateNewMessageBodyCreator = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, postText: text});

export default dialogsReducer;