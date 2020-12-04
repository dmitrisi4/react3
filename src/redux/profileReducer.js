const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let message = state.newPostText;
			let newPost = {id: Math.random().toFixed(4), message, likes: (Math.random() * 100).toFixed()};
			state.postData.unshift(newPost);
			console.log(state.postData);
			state.newPostText = '';
			return state;
		case CHANGE_NEW_POST_TEXT:
			state.newPostText = action.postText;
			return state;
		default:
			return state;
	}
};

export let addPostActionCreator = () => ({type: ADD_POST});
export let changeTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, postText: text});

export default profileReducer;