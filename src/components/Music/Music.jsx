import React from 'react';
import css from './Music.module.css';
import {addMusicActionCreator, changeNewAuthorActionCreator, changeNewSongActionCreator} from "../../redux/musicReducer";

const Music = (props) => {
	let addMusic = () => {
		props.dispatch(addMusicActionCreator());
	};
	let changeAuthor = (event) => {
			props.dispatch(changeNewAuthorActionCreator(event.target.value));
	};
	let changeSong = (event) => {
			props.dispatch(changeNewSongActionCreator(event.target.value));
	};

	return (
		<>
			<div className={css.title}>Music</div>
			<div>
				<input type="text" placeholder="Author" onChange={changeAuthor} value={props.state.newMusicData.musicAuthor} />
				<input type="text" placeholder="Song" onChange={changeSong} value={props.state.newMusicData.musicSong} />
				<button onClick={addMusic}>Send</button>
			</div>
			<div className={css.musicList}>
				{props.state.musicData.map((itemData, index) => {
					return (
						<div className={css.musicItem} key={index}>Автор: {itemData.author} <br/>
							Трек: {itemData.song}
						</div>

					)
				})}
			</div>
		</>
	)
};

export default Music;