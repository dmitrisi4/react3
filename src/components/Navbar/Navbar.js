import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Navbar.module.css';
import FriendsBar from './Friends/FriendsBar';
import * as axios from "axios";
import avatar from './../../assets/image/avajpg.jpg';

class Navbar extends React.Component {
// 	componentDidMount() {
// 		axios.get('api/users?page=3&count=3').then(response => {
// 			this.props.setUsers(response.data.items);
// 		})
// }
	render() {
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
							<NavLink to="/blog" activeClassName={css.activeLink}>Blog</NavLink>
						</li>
						<li className={css.item}>
							<NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
						</li>
						<li className={css.item}>
							<NavLink to="/music" activeClassName={css.activeLink}>Music</NavLink>
						</li>
						<li className={css.item}>
							<NavLink to="/users" activeClassName={css.activeLink}>Find users</NavLink>
						</li>
						<li className={css.item}>
							<NavLink to="/settings" activeClassName={css.activeLink}>settings</NavLink>
						</li>
					</ul>
				</nav>
				<div className={css.friendsBar}>
					<span>Friends</span>
					<ul className={css.friendsList}>
						{this.props.users.map((user) => {
							return (
								<FriendsBar name={user.name} avatar={user.photos.small || avatar} key={user.id * Math.random()} id={user.id}/>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}


};

export default Navbar;
