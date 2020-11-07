import React from 'react';
import './nav.css'

const Navbar = (props) => {
	return (
		<nav className={'nav'}>
			<li><a href="#">Profile</a></li>
			<li><a href="#">Messages</a></li>
			<li><a href="#">News</a></li>
			<li><a href="#">Music</a></li>
		</nav>
	)
};

export default Navbar;
