import React from 'react';
import {UserBar} from "./UserBar/UserBar";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserAuthData} from "../../redux/authReducer";
import * as axios from 'axios';

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			// withCredentials: true,
			headers: {
				'API-KEY': '2dd11272-1b24-47b8-889a-c9adb8ca16d9'
			}
		})
		.then(response => {
			console.log({response});
			debugger;
			this.props.setUserAuthData(response.data.data)
		})
	}

	render() {
		return (
			<Header {...this.props}/>
		)
	}
};



let mapStateToProps = (state) => {
	return {
		userData: state.userData,
		authData: state.authData,
	}
};

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);

