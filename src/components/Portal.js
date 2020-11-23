import React from 'react';
import { Button } from '@material-ui/core';
import "./Portal.css"
import Login from './Login';
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Portal({loginSession}) {
	return (
		<div className="portal">
		<Login loginSession={loginSession}/>
		<SignIn/>
	</div>
	);
}

export default Portal;
