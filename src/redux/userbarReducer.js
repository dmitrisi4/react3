let initialState = {
	userList: [
		{id: Math.random().toFixed(4), login: 'user', avatar: 'https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg'}
	],
};

let userbarReducer = (state = initialState, action) => {
	return state;
};

export default userbarReducer;