import React from 'react';
import Post from './Post/Post';
import css from "./MyPosts.module.css";
import {addPostActionCreator, changeTextActionCreator} from '../../../redux/profileReducer';

const MyPosts = (props) => {


	let postsElements = props.state.postData.map((post, index) => {
		return <Post message={post.message} likesCount={post.likes} key={index} />;
	})

	let newPostElement = React.createRef();

	let addPosts = () => {
		props.dispatch(addPostActionCreator());
	}
	let handleChange = (event) => {
		props.dispatch(changeTextActionCreator(event.target.value));
	}

	return (
		<div>my posts
			<div>
					<textarea name="post" cols="30" rows="10" ref={newPostElement} onChange={handleChange} value={props.state.newPostText}/>
					<button onClick={addPosts}>Send</button>
			</div>

			<div>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;