import React from 'react';
import css from './Header.module.css';
import {UserBar} from "./UserBar/UserBar";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

const Header = (props) => {
	return (
		<header className={css.header}>
				<UserBar userData={props.userData}
				/>
		</header>

	);
}

let mapStateToProps = (state) => {
	return {
		userData: state.userData
	}
};

let mapDispatchToProps = () => {
	return {}
};

let HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnect;