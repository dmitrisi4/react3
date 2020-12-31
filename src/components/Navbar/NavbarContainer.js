import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {setUsersAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar.users,
		users: state.usersList.users,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
	setUsers: (users) => {
		dispatch(setUsersAC(users));
	}
	}
};

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
