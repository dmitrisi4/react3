import React from 'react';
import css from './UserBar.module.css';

export const UserBar = (props) => {
	return (
		<>
			{props.userData.userList.map(user => {
				return (
					<button className={css.userBar} key={'as'}>
						<div className={css.picWrapper}>
							<img src={user.avatar} className={css.userPic} alt="avatar"/>
						</div>
						<div className={css.login}>{user.login}</div>
					</button>
				)
			})}
		</>
	)
};