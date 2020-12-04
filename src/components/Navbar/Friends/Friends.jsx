import React from 'react';
import css from './Friends.module.css';
import {NavLink} from "react-router-dom";

let FriendsBar = (props) => {
	let path = '/user/' + props.id;
	return (
		<li className={css.listItem}>
			<img className={css.avatar} src={props.avatar} alt="ava"/>
			<NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
		</li>
	)
}

export default FriendsBar;