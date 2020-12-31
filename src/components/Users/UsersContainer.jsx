import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
	follow,
	setCurrentPage,
	setTotalCount,
	setUsers,
	toggleIsFetching,
	unfollow
} from "../../redux/usersReducer";
import * as axios from 'axios';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`api/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			this.props.setTotalUserCount(response.data.totalCount);
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		axios.get(`api/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
		})
	}

	render() {

		return (
			<>
				{this.props.isFetching ? <Preloader/> : null}
				<Users users={this.props.users}
				       totalUserCount={this.props.totalUserCount}
				       pageSize={this.props.pageSize}
				       currentPage={this.props.currentPage}
				       setUsers={this.props.setUsers}
				       follow={this.props.follow}
				       unfollow={this.props.unfollow}
				       setCurrentPage={this.props.setCurrentPage}
				       setTotalUserCount={this.props.setTotalUserCount}
				       onPageChanged={this.onPageChanged}
				/>
			</>
		)

	}
};

let mapStateToProps = (state) => {
	return {
		users: state.usersList.users,
		totalUserCount: state.usersList.totalUserCount,
		pageSize: state.usersList.pageSize,
		currentPage: state.usersList.currentPage,
		isFetching: state.usersList.isFetching,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		setTotalUserCount: (totalCount) => {
			dispatch(setTotalCountAC(totalCount));
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching));
		},
	}
};


export default connect(mapStateToProps, {
	setUsers: setUsers,
	follow: follow,
	unfollow: unfollow,
	setCurrentPage: setCurrentPage,
	setTotalUserCount: setTotalCount,
	toggleIsFetching: toggleIsFetching,
})(UsersContainer);



