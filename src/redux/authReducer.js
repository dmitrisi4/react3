const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
	id: null,
	email: null,
	login: null,
	isFetching: false,
}
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
				isFetching: true
			}
		default:
			return state;
	}
};

export const setUserAuthData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});

export default authReducer;