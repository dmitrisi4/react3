import React from 'react';
import css from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = (props) => {


	return (
		<div className={css.profile}>
			<ProfileInfo />
			<MyPosts state={props.state} dispatch={props.dispatch}/>
		</div>
	)
};

export default Profile;