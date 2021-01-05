import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './Portal.css';
import Login from './Login';
import SignIn from './SignIn';
import problem from './problem.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Portal({ loginSession, signUpSession }) {
	const [ Signup, setSignup ] = useState(false);
	const [ login, setlogin ] = useState(false);
	const [ color, setColor ] = useState(false);
	// const [ login, setlogin ] = useState(false);
	

	const handleSigninl = () => {
		const loginButton = document.getElementById("portal__login")
		console.log(loginButton)
		setSignup(!Signup);
		setlogin(false)
		// if (!login){
		// 	loginButton.style.color = "gray"
		// 	loginButton.style.fontSize = "15px"

		// } else {
		// 	loginButton.style.color = "black"
		// 	loginButton.style.fontSize = "25px"
		// }
	};

	
	const handleLogin = () => {
		const signButton = document.getElementById("portal__sign")
		setlogin(!login);
		setSignup(true)
		// if (!Signup){
		// 	signButton.style.color = "gray"
		// 	signButton.style.fontSize = "15px"

		// } else {
		// 	signButton.style.color = "black"
		// 	signButton.style.fontSize = "25px"
		// }
	};

	return (
		<div className="main__portal">
			<section className="header">
				<div className="main__header">
				<h1>Note Exchange</h1>
				</div>
				<p><strong>Make all the_____________________notes worth taking...</strong></p>
				<ul className="header__ul">
				<li>CHEMISTRY</li>
				<li>HISTORY</li>
				<li>ALEGEBRA</li>
				<li>BIOLOGY</li>
				<li>CALCULUS</li>
				<li>ENGINEERING</li>
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
				<li>COMPUTER SCIENCE</li>
				<li>ORGANIC CHEMISTRY</li>
				<li>ROBOTICS</li>
				<li>COMMUNICATIONS</li>
				<li>HUMANITIES</li>
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
			{/* <div className="portal__img">
				<img src={problem} alt="problem"/>
			</div> */}
			<section className="portal">
				<div className="user__portal">
					<h2 id="portal__sign" onClick={handleSigninl}>START SELLING!</h2>
					{Signup ? null: <SignIn signUpSession={signUpSession} /> }
					<h2 id="portal__login" onClick={handleLogin}>LOGIN</h2>
					{login ? <Login loginSession={loginSession} /> : null}
				 {/* <Login loginSession={loginSession} />  */}
				</div>
			</section>
		</div>
	);
}

export default Portal;
