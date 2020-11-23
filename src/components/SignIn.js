import React, { useState } from 'react';
import './SignIn.css';
import { Button } from '@material-ui/core';
function SignIn({getUser}) {
	const [ profile, setprofile ] = useState({});
	const [ name, setName ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	console.log(name);
	console.log(username);
	console.log(password);

	const handleSignUp = (e) => {
		e.preventDefault()
		console.log("SIGNUP")
		fetch('http://localhost:8000/users',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					name: name,
					username: username,
					password: password
				})
		}).then(res => res.json()).then(data => {
			console.log(data)
			setprofile(data)
			localStorage.token = profile;
		})
		getUser(profile)

	};

	return (
		<div className="signin">
			<form onSubmit={(e)=> handleSignUp(e)}>
				<input
					className="input"
					name="name"
					placeholder="whats you name?"
					value = {name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className="input"
					name="username"
					placeholder="enter a username"
					value = {username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className="input"
					name="password"
					placeholder="enter a password"
					value = {password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button type="submit" variant="contained">SIGNUP</Button>
			</form>
		</div>
	);
}

export default SignIn;
