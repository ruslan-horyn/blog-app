import React from 'react';

const LoginPage = () => {
	return (
		<div>
			<label htmlFor=''>
				Podaj login
				<input style={{ marginLeft: 15 }} type='text' />
			</label>
			<br />
			<br />
			<label htmlFor=''>
				Podaj hasło
				<input style={{ marginLeft: 15 }} type='password' />
			</label>
			<br />
			<br />
			<button>Załoguj się</button>
		</div>
	);
};

export default LoginPage;
