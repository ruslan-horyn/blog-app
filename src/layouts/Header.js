import React from 'react';
import { Route, Switch } from 'react-router-dom';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import '../styles/Header.css';

const randomImg = () => {
	const images = [img1, img2, img3];
	const index = Math.floor(Math.random() * images.length);
	const img = images[index];
	return img;
};

const Header = props => {
	return (
		<>
			<Switch>
				<Route
					path='/'
					exact
					render={() => <img src={randomImg()} alt='miasto' />}
				/>
				<Route
					path='/products'
					render={() => <img src={randomImg()} alt='miasto' />}
				/>
				<Route
					path='/contact'
					render={() => <img src={randomImg()} alt='miasto' />}
				/>
				<Route
					path='/admin'
					render={() => <img src={randomImg()} alt='miasto' />}
				/>
				<Route render={() => <img src={randomImg()} alt='miasto' />} />
			</Switch>
		</>
	);
};

export default Header;
