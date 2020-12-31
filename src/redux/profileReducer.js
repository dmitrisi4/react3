const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
	postData: [
		{id: Math.random().toFixed(4), message: 'Hi, how are you?', likes: (Math.random() * 100).toFixed()},
		{id: Math.random().toFixed(4), message: 'It\'s my first post', likes: (Math.random() * 100).toFixed()},
	],
	newPostText: 'dimas.com',
	profile: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		case ADD_POST:
			let message = state.newPostText;
			return {
				...state,
				newPostText: '',
				postData: [{id: Math.random().toFixed(4), message, likes: (Math.random() * 100).toFixed()}, ...state.postData]
			}
		case CHANGE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.postText
			}
		default:
			return state;
	}
};

export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let addPostActionCreator = () => ({type: ADD_POST});
export let changeTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, postText: text});

export default profileReducer;