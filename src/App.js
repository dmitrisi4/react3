import React, {Component} from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Footer from './components/Footer/Footer';
import MusicContainer from "./components/Music/MusicContainer";
import Settings from "./components/Settings/Settings";
import css from "./app.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import BlogContainer from "./components/Blog/BlogContainer";
import NewsContainer from "./components/News/NewsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

	return (
		<BrowserRouter>
			<div className={css.appWrapper}>
				<HeaderContainer />
				<div className={css.appWrapperContent}>
					<Route exact path='/' render={() => <ProfileContainer />} />
					<Route path='/profile/:userId' render={() => <ProfileContainer />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/blog' render={() => <BlogContainer />} />
					<Route path='/news' render={() => <NewsContainer />} />
					<Route path='/music' render={() => <MusicContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/settings' render={() => <Settings />}/>
				</div>
				<NavbarContainer />
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;