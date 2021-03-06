import React, { useState } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
function Login({ loginSession }) {
	const user = JSON.parse(localStorage.getItem('userInfo'));

	const history = useHistory();
	const [ userSession, setuserSession ] = useState({
		username: '',
		password: ''
	});

	// console.log(userSession)

	const handleChange = (e) => {
		e.preventDefault();
		setuserSession({
			...userSession,
			[e.target.name]: e.target.value
		});
		console.log(userSession);
	};
	const handleSubmit = (e) => {
		console.log('we here');
		e.preventDefault();
		loginSession(userSession);
	};
	
	return (
		<div className="login">
			<form onSubmit={handleSubmit}>
				<div className="input">
					<PersonIcon/>
					<input
						name="username"
						placeholder="username"
						value={userSession.username}
						onChange={handleChange}
					/>
				</div>
				<div className="input">
				<LockIcon/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={userSession.password}
						onChange={handleChange}
					/>
				</div>
				<Button variant="outlined" className="login__button" type="submit" color="primary">
					LOGIN
				</Button>
			</form>
		</div>
	);
}

export default Login;
