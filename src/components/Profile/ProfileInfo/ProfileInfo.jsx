import React from 'react';
import css from './ProfileInfo.module.css';
import avaImg from '../../../images/avatar.jpg';


// console.log(avaImg)
const ProfileInfo = (props) => {
	return (

			<div className={css.profileHeader}>
				<div className={css.avatar}>
					<img src={avaImg} alt="avatar"/>
				</div>

			</div>

	)
};

export default ProfileInfo;