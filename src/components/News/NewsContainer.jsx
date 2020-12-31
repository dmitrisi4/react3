import React from 'react';
import {
	addArticleCreator,
	changeNewAuthorCreator,
	changeNewBodyCreator,
	changeNewTitleCreator
} from "../../redux/newsReducer";
import News from "./News";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		articleData: state.newsPage.articleData,
		newArticleAuthor: state.newsPage.articleAuthor,
		newArticleBody: state.newsPage.articleBody,
		newArticleTitle: state.newsPage.articleTitle,
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		onAddArticle: (e) => {
			e.preventDefault();
			dispatch(addArticleCreator());
		},
		onUpdateNewAuthor: (text) => {
			dispatch(changeNewAuthorCreator(text));
		},
		onUpdateNewBody: (text) => {
			dispatch(changeNewBodyCreator(text));
		},
		onUpdateNewTitle: (text) => {
			dispatch(changeNewTitleCreator(text));
		},
	}
};

let NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;