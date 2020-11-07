import React, {Component} from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Styles from './App.mudule.css';



console.log(Styles);


const App = () => {
	return (
		<div className={Styles.appWrapper}>
			<Header/>
			<Profile />
			<Navbar/>
			<Footer/>
		</div>
	);
}

export default App;