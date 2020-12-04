import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Navbar.module.css';
import FriendsBar from "./Friends/Friends";

const Navbar = (props) => {
	return (
		<div className={css.navbarWrapper}>
			<nav className={css.nav}>
				<ul className={css.navList}>
					<li className={css.item}>
						<NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
					</li>
					<li className={css.item}>
						<NavLink to="/dialogs" activeClassName={css.activeLink}>Messages</NavLink>
					</li>
					<li className={css.item}>
						<NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
					</li>
					<li className={css.item}>
						<NavLink to="/music" activeClassName={css.activeLink}>Music</NavLink>
					</li>
					<li className={css.item}>
						<NavLink to="/settings" activeClassName={css.activeLink}>settings</NavLink>
					</li>
				</ul>
			</nav>

			<div className={css.friendsBar}>
				<span>Friends</span>
				<ul className={css.friendsList}>
					{props.state.map((user) => {
						return (
							<FriendsBar name={user.name} avatar={user.avatar} key={user.id} id={user.id}/>
						)
					})}
				</ul>
			</div>

		</div>
	)
};

export default Navbar;
