import React, { useState } from 'react';
import './SignIn.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function SignIn({ signUpSession }) {
	const user = JSON.parse(localStorage.getItem('userInfo'));
	const history = useHistory();
	const [ profile, setprofile ] = useState({
		name: '',
		username: '',
		password: ''
	});
	// console.log(name);
	// console.log(username);
	// console.log(password);

	const handleChange = (e) => {
		e.preventDefault();
		setprofile({
			...profile,
			[e.target.name]: e.target.value
		});
	};

	console.log(profile);
	const handleSignUp = (e) => {
		e.preventDefault();
		console.log('SIGNUP');
		signUpSession(profile);
	};

	return (
		<div className="signin">
			<form onSubmit={(e) => handleSignUp(e)}>
				<input
					className="input"
					name="name"
					placeholder="whats you name?"
					value={profile.name}
					onChange={handleChange}
				/>
				<input
					className="input"
					name="username"
					placeholder="enter a username"
					value={profile.username}
					onChange={handleChange}
				/>
				<input
					className="input"
					name="password"
					placeholder="enter a password"
					value={profile.password}
					onChange={handleChange}
				/>
				<Button
				className="signin__button"
				 type="submit" 
				 variant="outlined" color="primary"
				 >
					SIGNUP
				</Button>
			</form>
		</div>
	);
}

export default SignIn;
