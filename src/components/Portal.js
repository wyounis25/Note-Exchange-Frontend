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
		setlogin(false)
	};

	const handleLogin = () => {
		setlogin(!login);
		setSignup(false)
	};

	return (
		<div className="main__portal">
			<section className="header">
				<div className="main__header">
				<h1>NOTE EXHANGE</h1>
				</div>
				<p><strong>Make all the notes worth taking...</strong></p>
				<ul className="header__ul">
				<li>CHEMISTRY</li>
				<li>HISTORY</li>
				<li>ALEGEBRA</li>
				<li>BIOLOGY</li>
				<li>CALCULUS</li>
				<li>MECHANICAL ENGINEERING</li>
				<li>ART</li>
				<li>FINANCE</li>
				<li>PSYCOLOGY</li>
				<li>ACCOUNTING</li>
				<li>MANAGEMENT</li>
				<li>CELL BIOLOGY</li>
				<li>PHYSICS</li>
				<li>PSYCOLOGY</li>
				<li>ANCIENT HISTORY</li>
				<li>PHILOSOPHY</li>
				<li>NURSING</li>
				<li>ANATOMY</li>
				<li>ECONOMICS</li>
				<li>BRAIN & BEHAVIOR</li>
				<li>BIOCHEMSITRY</li>
				<li>MUSIC</li>
				<li>FRENCH</li>
				<li>ENGLISH</li>
				<li>QUANTUM PHYSICS</li>
				<li>GERMAN</li>
				<li>ELECTRICAL ENGINEERING</li>
				<li>COMPUTER SCIENCE</li>
				<li>ORGANIC CHEMISTRY</li>
				<li>ROBOTICS</li>
				<li>COMMUNICATIONS</li>
				<li>HUMANITIES</li>
				<li>CIVIL ENGINEERING</li>
				<li>DATA SCIENCE</li>
				<li>GEOLOGY</li>
				<li>MICROBIOLOGY</li>
				<li>SOCIOLOGY</li>
				<li>ART HISTORY</li>
				<li>SPANISH</li>
				<li>NUTRITION</li>
				<li>ARCHITECTURE</li>
				<li>MARKETING</li>
				<li>AND <strong >MANY MORE...</strong></li>
			</ul>
			</section>
			<section className="portal">
				<div className="user__portal">
					<h1 onClick={handleLogin}>LOGIN</h1>
					{login ? <Login loginSession={loginSession} /> : null}
					<br />
					<br />
					<h1 onClick={handleBool}>SIGNUP</h1>
					<br />
					{Signup ? <SignIn signUpSession={signUpSession} /> : null}
				</div>
			</section>
		</div>
	);
}

export default Portal;
