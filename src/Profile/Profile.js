import React from 'react';
import css from './profile.module.css';

let Profile = (props) => {
	return (
		<div className={css.profile}>
			<div className={css.profileHeader}>
				<div className={css.avatar}>
					<img src="../img/img.png" alt="avatar"/>
				</div>
			</div>

			<div>my posts
				<div>
					new post
				</div>
				<div>
					<div className={css.item}>post 1</div>
					<div className={`${css.item} ${css.active}`}>post 1</div>
					<div>post 1</div>
					<div>post 1</div>
				</div>
			</div>
		</div>
	)
};

export default Profile;