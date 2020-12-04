const ADD_ARTICLE = 'ADD-ARTICLE';
const CHANGE_NEW_ARTICLE_TITLE = 'CHANGE-ARTICLE-TITLE';
const CHANGE_NEW_ARTICLE_AUTHOR = 'CHANGE_NEW_ARTICLE_AUTHOR';
const CHANGE_NEW_ARTICLE_BODY= 'CHANGE-NEW-ARTICLE-BODY';

const newsReducer = (state, action) => {
	switch (action.type) {
		case ADD_ARTICLE:
			let author = state.newArticleData.articleAuthor;
			let title = state.newArticleData.articleTitle;
			let body = state.newArticleData.articleBody;
			if (author && title && body !== '') {
				let newArticle = {id: Math.random().toFixed(4), author, title, body};
				state.articleData.push(newArticle);
				state.newArticleData.articleTitle = '';
				state.newArticleData.articleBody = '';
				state.newArticleData.articleAuthor = '';
				return state;
			}else {
				alert('Заполнены не все поля');
			};

		case CHANGE_NEW_ARTICLE_TITLE:
			state.newArticleData.articleTitle = action.articleTitle;
			return state;
		case CHANGE_NEW_ARTICLE_BODY:
			state.newArticleData.articleBody = action.articleBody;
			return state;
		case CHANGE_NEW_ARTICLE_AUTHOR:
			state.newArticleData.articleAuthor = action.articleAuthor;
			return state;
	}

}

export let addArticleCreator = () => ({type: ADD_ARTICLE});
export let changeNewTitleCreator = (text) => ({type: CHANGE_NEW_ARTICLE_TITLE, articleTitle: text});
export let changeNewAuthorCreator = (text) => ({type: CHANGE_NEW_ARTICLE_AUTHOR, articleAuthor: text});
export let changeNewBodyCreator = (text) => ({type: CHANGE_NEW_ARTICLE_BODY, articleBody: text});

export default newsReducer;