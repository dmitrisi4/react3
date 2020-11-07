import React from 'react';
import css from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<nav className={css.nav}>
			<li><a href="#">Profile</a></li>
			<li><a href="#">Messages</a></li>
			<li><a href="#">News</a></li>
			<li><a href="#">Music</a></li>
		</nav>
	)
};

export default Navbar;
