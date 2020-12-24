import React from 'react';
import { Route } from 'react-router-dom';

import '../styles/Footer.css';

const Footer = () => {
	return (
		<div>
			<h2>Stopka</h2>
			<Route
				exact
				path='/'
				render={props => {
					return (
						<p>
							Jesteś na <span>stronie głównej</span>
						</p>
					);
				}}
			/>
			<Route
				exact
				path='/:page'
				render={props => {
					return (
						<>
							<p>
								Jesteś na <span>{props.match.params.page}</span>
							</p>
							<p>
								Jesteś na <span>{props.match.url}</span>
							</p>
							<p>
								Jesteś na <span>{props.match.path}</span>
							</p>
						</>
					);
				}}
			/>
			<Route
				exact
				path='/:page/:idProduct'
				render={props => {
					return (
						<>
							<p>
								Jesteś na <span>{props.match.params.idProduct}</span>
							</p>
							<p>
								Jesteś na <span>{props.match.url}</span>
							</p>
							<p>
								Jesteś na <span>{props.match.path}</span>
							</p>
						</>
					);
				}}
			/>
		</div>
	);
};

export default Footer;
