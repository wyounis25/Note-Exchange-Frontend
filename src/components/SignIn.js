import React, { useState } from 'react';
import './SignIn.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import FaceIcon from '@material-ui/icons/Face';
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
				<div className="input">
					<FaceIcon/>
					<input name="name" placeholder="what's your name" value={profile.name} onChange={handleChange} />
				</div>
				<br />
				<div className="input">
				<PersonIcon/>

					<input
						name="username"
						placeholder="enter a username"
						value={profile.username}
						onChange={handleChange}
					/>
				</div>
				<br />
				<div className="input">
				<LockIcon/>

					<input
						type="password"
						name="password"
						placeholder="enter a password"
						value={profile.password}
						onChange={handleChange}
					/>
				</div>
				<br />
				<Button variant="outlined"className="signin__button" type="submit" color="primary">SIGN UP!
				</Button>
			</form>
		</div>
	);
}

export default SignIn;
