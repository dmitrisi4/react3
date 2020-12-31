import React from 'react';
import BlogArticle from "./BlogArticle/BlogArticle";
import css from './Blog.mudule.css';

const Blog = (props) => {
	let addArticle = (e) => {
		props.onAddArticle(e);
	}

	let changeNewTitle = (e) => {
		props.onUpdateNewTitle(e.target.value);
	}

	let changeNewBody = (e) => {
		props.onUpdateNewBody(e.target.value);
	}

	return (

		<div className={css.blogWrapper}>
			<div>
				{props.blogData.map((item, index) => {
					return <BlogArticle title={item.title} body={item.body} key={index}/>
				})}
			</div>
			<form onSubmit={addArticle}>
				<input type="text" placeholder="Title article" onChange={changeNewTitle}
				       value={props.newBlogDataTitle}/>
				<textarea placeholder="Text..." onChange={changeNewBody} value={props.newBlogDataBody}/>
				<button type="submit">Send</button>
			</form>
		</div>
	)
};

export default Blog;