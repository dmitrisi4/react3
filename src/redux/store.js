import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import musicReducer from "./musicReducer";
import sidebarReducer from "./sidebarReducer";
import newsReducer from "./newsReducer";
import blogReducer from "./blogReducer";

let store = {
	_state: {
		profilePage: {
			postData: [
				{id: Math.random().toFixed(4), message: 'Hi, how are you?', likes: (Math.random() * 100).toFixed()},
				{id: Math.random().toFixed(4), message: 'It\'s my first post', likes: (Math.random() * 100).toFixed()},
			],
			newPostText: 'dimas.com'
		},

		dialogsPage: {
			dialogsData: [
				{
					id: 1,
					name: 'Dimasta',
					avatar: 'https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg'
				},
				{
					id: 2,
					name: 'bot',
					avatar: 'https://cdn.vox-cdn.com/thumbor/UNwAJoM8e6nbSuBccxj_33Ca7eM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22005398/disney_robot.jpg'
				},
				{id: 3, name: 'saved', avatar: 'https://static.thenounproject.com/png/451502-200.png'},
			],

			messagesData: [
				{id: Math.random().toFixed(4), message: 'Hi'},
				{id: Math.random().toFixed(4), message: 'Ku'},
				{id: Math.random().toFixed(4), message: 'Privet'},
			],

			newMessageText: 'keks',

		},

		musicPage: {
			musicData: [
				{id: Math.random().toFixed(4), author: 'Oxxxymiron', song: 'Pesenka Gremlina'},
				{id: Math.random().toFixed(4), author: 'Bamberg', song: 'Krik 3'},
				{id: Math.random().toFixed(4), author: 'NoizeMC', song: 'Make some Noize'},
			],

			newMusicData: {
				musicAuthor: '',
				musicSong: '',
			},
		},

		newsPage: {
			articleData: [
				{id: Math.random().toFixed(4), author: 'Dimych', title: 'Lorem', body: 'Lorem Text' },
				{id: Math.random().toFixed(4), author: 'Andrich', title: 'Lorem 2', body: 'Lorem Text 2' },
				{id: Math.random().toFixed(4), author: 'Bodich', title: 'Lorem 3', body: 'Lorem Text 3' },
			],

			newArticleData: {
				articleAuthor: '',
				articleTitle: '',
				articleBody: ''
			}
		},

		blogPage: {
			blogData: [
				{id: Math.random().toFixed(4), body: 'Text Lorem 1...', title: 'Title Lorem 1' },
				{id: Math.random().toFixed(4), body: 'Text Lorem 2...', title: 'Title Lorem 2' },
			],
			newBlogData: {
				body: '',
				title: '',
			}
		},

		userData: {
			userList: [
				{id: Math.random().toFixed(4), login: 'user', avatar: 'https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg'}
			],
		},

		sidebar: [
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

	},
	_callSubscriber() {
		console.log('state changed')
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer; //pattern observer
	},

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.musicPage = musicReducer(this._state.musicPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._state.newsPage = newsReducer(this._state.newsPage, action);

		this._state.blogPage = blogReducer(this._state.blogPage, action);

		this._callSubscriber(this._state);

	},
}





// export default store;