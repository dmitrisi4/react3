import React from 'react';
import css from './Post.module.css';
import imgURL from 'url:../../../../images/img.png';

const Post = (props) => {

	return (
		<div className={`${css.item} ${css.active}`}>
			<img src={imgURL} alt="avatar"/>
			<div>{props.message}</div>
			<div>
				<span>like: {props.likesCount}</span>
			</div>
		</div>
	)
}

export default Post;