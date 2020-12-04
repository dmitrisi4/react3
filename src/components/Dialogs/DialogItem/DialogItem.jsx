import React from 'react';
import css from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id
	return (
		<li className={css.item}>
			<img className={css.ava} src={props.avatar} alt="ava"/>
			<NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
		</li>
	);
};


export default DialogItem;