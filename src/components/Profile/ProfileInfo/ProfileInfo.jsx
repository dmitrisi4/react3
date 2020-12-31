import React from 'react';
import css from './ProfileInfo.module.css';
import avaImg from '../../../images/avatar.jpg';
import Preloader from "../../common/Preloader/Preloader";


// console.log(avaImg)
const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	} else {
		let contactsArr = Object.entries(props.profile.contacts)
		console.log(contactsArr)
		return (

			<div className={css.profileHeader}>
				<div className={css.avatar}>
					<img src={props.profile.photos.large} alt="avatar"/>
					<h3>{props.profile.fullName}</h3>
					<h4>about me:</h4>
					<p>{props.profile.aboutMe}</p>
					<h4>contacts:</h4>
					<ul>
					{contactsArr.map(item => {
						return (
							<li>{`${item[0]} : ${item[1]}`}</li>
						)
					})}
					</ul>
					<h4>looking For A Job:</h4>
					<p>{props.profile.lookingForAJob.toString()}</p>
					<h4>looking For A Job Description: </h4>
					<p>{props.profile.lookingForAJobDescription}</p>


				</div>

			</div>

		)
	}
};

export default ProfileInfo;