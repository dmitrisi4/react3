const ADD_BLOG_ARTICLE = 'ADD-BLOG-ARTICLE';
const UPDATE_NEW_TITLE = 'UPDATE-NEW-TITLE';
const UPDATE_NEW_BODY = 'UPDATE-NEW-BODY';

let initialState = {
	blogData: [
		{id: Math.random().toFixed(4), body: 'Text Lorem 1...', title: 'Title Lorem 1'},
		{id: Math.random().toFixed(4), body: 'Text Lorem 2...', title: 'Title Lorem 2'},
	],
		newBlogBody: '',
		newBlogTitle: '',
};

const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BLOG_ARTICLE:
			let title = state.newBlogTitle;
			let body = state.newBlogBody;
			if (title && body != '') {
				return {
					...state,
					newBlogTitle: '',
					newBlogBody: '',
					blogData: [{id: Math.random().toFixed(4), body, title}, ...state.blogData]
				}
			} else {
				alert('Заполните все поля');
			}
		case UPDATE_NEW_TITLE:
			return {
				...state,
				newBlogTitle: action.newTitle
			}
		case UPDATE_NEW_BODY:
			return {
				...state,
				newBlogBody: action.newBody
			}
		default:
			return state;
	}
}

export let addBlogArticleCreator = () => ({type: ADD_BLOG_ARTICLE});
export let updateNewTitleCreator = (text) => ({type: UPDATE_NEW_TITLE, newTitle: text});
export let updateNewBodyCreator = (text) => ({type: UPDATE_NEW_BODY, newBody: text});
export default blogReducer;