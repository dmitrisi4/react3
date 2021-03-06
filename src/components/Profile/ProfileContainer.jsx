	import React from 'react';
	import Profile from './Profile';
	import * as axios from 'axios';
	import {setUserProfile} from '../../redux/profileReducer';
	import {connect} from 'react-redux';
	import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		axios.get(`/api/profile/${userId}`).then(response => {
				this.props.setUserProfile(response.data);
				console.log(response.data);
			});
	}

	render() {
		return (
				<Profile {...this.props} profile={this.props.profile}/>
		)
	}
};

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
	}
};

const WithUrlDataContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainer);