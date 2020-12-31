const SET_USERS = 'SET-USERS';
let initialState = {
	users: [
		{
			id: Math.random().toFixed(4),
			name: 'Dimasta',
			avatar: 'https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg'
		},
		{
			id: Math.random().toFixed(4),
			name: 'bot',
			avatar: 'https://cdn.vox-cdn.com/thumbor/UNwAJoM8e6nbSuBccxj_33Ca7eM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22005398/disney_robot.jpg'
		},
		{id: Math.random().toFixed(4), name: 'saved', avatar: 'https://static.thenounproject.com/png/451502-200.png'},
	]
};


const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		default:
			return state;
	}
};

const setUsersAC = (users) => ({type: SET_USERS, users})

export default sidebarReducer;