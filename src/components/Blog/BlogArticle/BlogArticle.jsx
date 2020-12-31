import React from 'react';
import css from './BlogArticle.module.css';

const BlogArticle = (props) => {
	return (
		<article className={css.article}>
			<h3>{props.title}</h3>
			<div>{props.body}</div>
		</article>
	)
};

export default BlogArticle;