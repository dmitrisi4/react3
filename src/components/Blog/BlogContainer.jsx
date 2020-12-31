import React from 'react';
import Blog from "./Blog";
import {addBlogArticleCreator, updateNewBodyCreator, updateNewTitleCreator} from "../../redux/blogReducer";
import {connect} from "react-redux";

let  mapStateToProps = (state) => {
	return {
		blogData: state.blogPage.blogData,
		newBlogDataTitle: state.blogPage.newBlogTitle,
		newBlogDataBody: state.blogPage.newBlogBody
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		onAddArticle: (e) => {
			e.preventDefault();
			dispatch(addBlogArticleCreator());
		},
		onUpdateNewTitle: (text) => {
			let action = updateNewTitleCreator(text);
			dispatch(action);
		},
		onUpdateNewBody: (text) => {
			let action = updateNewBodyCreator(text);
			dispatch(action);
		},

	}
};


let BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default BlogContainer;