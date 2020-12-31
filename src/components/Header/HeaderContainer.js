import React from 'react';
import {UserBar} from "./UserBar/UserBar";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserAuthData} from "../../redux/authReducer";
import * as axios from 'axios';

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`/api/auth/me`)
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

