import React, {Component} from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import css from "./app.css";

const App = (props) => {



	return (
		<BrowserRouter>
			<div className={css.appWrapper}>
				<Header/>
				<div className={css.appWrapperContent}>
					<Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />}/>
					<Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />}/>
					<Route path='/news' render={() => <News state={props.state.newsPage} dispatch={props.dispatch} />} />
					<Route path='/music' render={() => <Music state={props.state.musicPage} dispatch={props.dispatch} />}/>
					<Route path='/settings' render={() => <Settings />}/>
				</div>
				<Navbar state={props.state.sidebar}/>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;