import React from 'react';
import Article from "./Article/Article";
import {
	addArticleCreator,
	changeNewAuthorCreator,
	changeNewBodyCreator,
	changeNewTitleCreator
} from "../../redux/newsReducer";

const News = (props) => {
	let article = props.state.articleData.map((article, index) => {
	return <Article title={article.title} body={article.body} author={article.author} key={index} />
	});

	let addArticle = () => {
		props.dispatch(addArticleCreator());
	};
	let changeNewAuthor = (e) => {
		props.dispatch(changeNewAuthorCreator(e.target.value));
	};
	let changeNewTitle = (e) => {
		props.dispatch(changeNewTitleCreator(e.target.value));
	};
	let changeNewBody = (e) => {
		props.dispatch(changeNewBodyCreator(e.target.value));
	};




	return (
		<div>news
			<div>
				{article}
			</div>
			<div>
				<input type="text" placeholder="Author" onChange={changeNewAuthor} value={props.state.newArticleData.articleAuthor}/>
				<input type="text" placeholder="Title Article" onChange={changeNewTitle} value={props.state.newArticleData.articleTitle} />
				<textarea placeholder="Text" onChange={changeNewBody} value={props.state.newArticleData.articleBody} />
				<button onClick={addArticle}>Add</button>
			</div>
		</div>
	)
};

export default News;