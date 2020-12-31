import React from 'react';
import {addMusicActionCreator, changeNewAuthorActionCreator, changeNewSongActionCreator} from "../../redux/musicReducer";
import Music from './Music';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		musicData: state.musicPage.musicData,
		newMusicSong: state.musicPage.musicSong,
		newMusicAuthor: state.musicPage.musicAuthor,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		onAddMusic: (e) => {
			e.preventDefault();
			dispatch(addMusicActionCreator());
		},
		updateNewAuthor: (text) => {
			dispatch(changeNewAuthorActionCreator(text));
		},
		updateNewSong: (text) => {
			dispatch(changeNewSongActionCreator(text));
		},
	}
}

let MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;