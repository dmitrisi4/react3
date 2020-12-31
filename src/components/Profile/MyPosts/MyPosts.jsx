import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {


	let postsElements = props.posts.map((post, index) => {
		return <Post message={post.message} likesCount={post.likes} key={index} />;
	})

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}
	let onPostChange = (e) => {
		props.updateNewPostText(e.target.value);
	}

	return (
		<div>my posts
			<div>
					<textarea name="post" cols="30" rows="10" ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
					<button onClick={onAddPost}>Send</button>
			</div>

			<div>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;