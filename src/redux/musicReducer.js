const ADD_MUSIC = 'ADD-MUSIC';
const CHANGE_NEW_MUSIC_AUTHOR = 'CHANGE-NEW-MUSIC-AUTHOR';
const CHANGE_NEW_MUSIC_SONG = 'CHANGE-NEW-MUSIC-SONG';

const musicReducer = (state, action) => {
	switch (action.type) {
		case ADD_MUSIC:
			let author = state.newMusicData.musicAuthor;
			let song = state.newMusicData.musicSong;
			if (author && song !== '') {
				let newMusic = {id: Math.random().toFixed(4), author, song};
				state.musicData.push(newMusic);
				state.newMusicData.musicSong = '';
				state.newMusicData.musicAuthor = '';
				return state;
			} else {
				alert('Заполните все поля');
			}

		case CHANGE_NEW_MUSIC_AUTHOR:
			state.newMusicData.musicAuthor = action.musicAuthor;
			return state;
		case CHANGE_NEW_MUSIC_SONG:
			state.newMusicData.musicSong = action.musicSong;
			return state;
		default:
			return state;

			return state;
	};
};

export let addMusicActionCreator = () => ({type: ADD_MUSIC});
export let changeNewAuthorActionCreator = (text) => ({type: CHANGE_NEW_MUSIC_AUTHOR, musicAuthor: text});
export let changeNewSongActionCreator = (text) => ({type: CHANGE_NEW_MUSIC_SONG, musicSong: text});

export default musicReducer;