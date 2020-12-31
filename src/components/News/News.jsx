import React from 'react';
import Article from "./Article/Article";

const News = (props) => {
	let article = props.articleData.map((article, index) => {
	return <Article title={article.title} body={article.body} author={article.author} key={index} />
	});

	let addArticle = (e) => {
		props.onAddArticle(e)
	};
	let changeNewAuthor = (e) => {
		props.onUpdateNewAuthor(e.target.value);
	};
	let changeNewTitle = (e) => {
		props.onUpdateNewTitle(e.target.value);
	};
	let changeNewBody = (e) => {
		props.onUpdateNewBody(e.target.value);
	};


	return (
		<div>news
			<div>
				{article}
			</div>
			<div>
				<form onSubmit={addArticle}>
				<input type="text" placeholder="Author" onChange={changeNewAuthor} value={props.newArticleAuthor}/>
				<input type="text" placeholder="Title Article" onChange={changeNewTitle} value={props.newArticleTitle} />
				<textarea placeholder="Text" onChange={changeNewBody} value={props.newArticleBody} />
				<button type="submit">Add</button>
				</form>
			</div>
		</div>
	)
};

export default News;