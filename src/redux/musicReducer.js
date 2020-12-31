const ADD_MUSIC = 'ADD-MUSIC';
const CHANGE_NEW_MUSIC_AUTHOR = 'CHANGE-NEW-MUSIC-AUTHOR';
const CHANGE_NEW_MUSIC_SONG = 'CHANGE-NEW-MUSIC-SONG';

let initialState = {
	musicData: [
		{id: Math.random().toFixed(4), author: 'Oxxxymiron', song: 'Pesenka Gremlina'},
		{id: Math.random().toFixed(4), author: 'Bamberg', song: 'Krik 3'},
		{id: Math.random().toFixed(4), author: 'NoizeMC', song: 'Make some Noize'},
	],
	musicAuthor: '',
	musicSong: '',

};

const musicReducer = (state = initialState, action) => {
		switch (action.type) {
			case ADD_MUSIC:
				let author = state.musicAuthor;
				let song = state.musicSong;

				if (author && song !== '') {
					return {
						...state,
						musicSong: '',
						musicAuthor: '',
						musicData: [{id: Math.random().toFixed(4), author, song}, ...state.musicData],
					}
				} else {
					alert('Заполните все поля');
				}
				;

			case CHANGE_NEW_MUSIC_AUTHOR:
				return {
					...state,
					musicAuthor: action.musicAuthor
				}
			case CHANGE_NEW_MUSIC_SONG:
				return {
					...state,
					musicSong: action.musicSong
				}
			default:
				return state;
		}
		;
	}
;

export let addMusicActionCreator = () => ({type: ADD_MUSIC});
export let changeNewAuthorActionCreator = (text) => ({type: CHANGE_NEW_MUSIC_AUTHOR, musicAuthor: text});
export let changeNewSongActionCreator = (text) => ({type: CHANGE_NEW_MUSIC_SONG, musicSong: text});

export default musicReducer;