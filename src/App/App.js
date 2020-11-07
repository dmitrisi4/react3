import React, {Component} from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Profile from "../Profile/Profile";
import './app.css';
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const App = () => {
	return (
		<Wrapper>
			<div className={'app-wrapper'}>
				<Header/>
				<Profile />
				<Navbar/>
				<Footer/>
			</div>
		</Wrapper>
	);
}

export default App;