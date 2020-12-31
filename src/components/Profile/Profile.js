	import React from 'react';
import css from './profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

let Profile = (props) => {
	return (
		<div className={css.profile}>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</div>
	)
};

export default Profile;