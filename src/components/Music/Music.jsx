import React from 'react';
import css from './Music.module.css';

const Music = (props) => {
	let addMusic = (e) => {
		props.onAddMusic(e);
	};
	let changeAuthor = (e) => {
				props.updateNewAuthor(e.target.value);
	};
	let changeSong = (e) => {
			props.updateNewSong(e.target.value);
	};

	return (
		<>
			<div className={css.title}>Music</div>
			<form onSubmit={addMusic}>
				<input type="text" placeholder="Author" onChange={changeAuthor} value={props.newMusicAuthor} />
				<input type="text" placeholder="Song" onChange={changeSong} value={props.newMusicSong} />
				<button type="submit">Send</button>
			</form>
			<div className={css.musicList}>
				{props.musicData.map((itemData, index) => {
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