import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './Portal.css';
import Login from './Login';
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Portal({ loginSession, signUpSession }) {
	const [ Signup, setSignup ] = useState(false);
	const [ login, setlogin ] = useState(false);

	const handleBool = () => {
		setSignup(!Signup);
	};

	const handleLogin = () => {
		setlogin(!login);
	};

	return (
		<div className="portal">
			<h1 onClick={handleLogin}>LOGIN</h1>
			{login ? <Login loginSession={loginSession} /> : null}
			<br/>
			<hr/>
			<br/>
			<h1 onClick={handleBool}>SIGNUP</h1>
			<br/>
			{Signup ? <SignIn signUpSession={signUpSession} /> : null}
		</div>
	);
}

export default Portal;
