import React from 'react';
import css from './Article.module.css';
const Article = (props) => {
	return (
		<article className={css.article}>
			<h3 className={css.title}>Title: {props.title}</h3>
			<p className={css.body}>{props.body}</p>
			<div className={css.author}>Author: {props.author}</div>
		</article>
	);
};

export default Article;