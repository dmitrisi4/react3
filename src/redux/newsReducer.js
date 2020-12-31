const ADD_ARTICLE = 'ADD-ARTICLE';
const CHANGE_NEW_ARTICLE_TITLE = 'CHANGE-ARTICLE-TITLE';
const CHANGE_NEW_ARTICLE_AUTHOR = 'CHANGE_NEW_ARTICLE_AUTHOR';
const CHANGE_NEW_ARTICLE_BODY= 'CHANGE-NEW-ARTICLE-BODY';

let initialState = {
	articleData: [
		{id: Math.random().toFixed(4), author: 'Dimych', title: 'Lorem', body: 'Lorem Text' },
		{id: Math.random().toFixed(4), author: 'Andrich', title: 'Lorem 2', body: 'Lorem Text 2' },
		{id: Math.random().toFixed(4), author: 'Bodich', title: 'Lorem 3', body: 'Lorem Text 3' },
	],
	articleAuthor: '',
	articleTitle: '',
	articleBody: ''
};

const newsReducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_ARTICLE:
			let author = state.articleAuthor;
			let title = state.articleTitle;
			let body = state.articleBody;
			if (author && title && body !== '') {
				return {
					...state,

					articleData: [{id: Math.random().toFixed(4), author, title, body}, ...state.articleData]

				}
			} else {
				alert('Заполните все поля')
			}

		case CHANGE_NEW_ARTICLE_TITLE:
			return {
				...state,
				articleTitle: action.articleTitle
			}
		case CHANGE_NEW_ARTICLE_BODY:
			return {
				...state,
				articleBody: action.articleBody
			}
		case CHANGE_NEW_ARTICLE_AUTHOR:
			return {
				...state,
				articleAuthor: action.articleAuthor
			}
		default:
			return state;
	};

};




export let addArticleCreator = () => ({type: ADD_ARTICLE});
export let changeNewTitleCreator = (text) => ({type: CHANGE_NEW_ARTICLE_TITLE, articleTitle: text});
export let changeNewAuthorCreator = (text) => ({type: CHANGE_NEW_ARTICLE_AUTHOR, articleAuthor: text});
export let changeNewBodyCreator = (text) => ({type: CHANGE_NEW_ARTICLE_BODY, articleBody: text});
export default newsReducer;