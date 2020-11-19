import React from 'react';
import { Button } from '@material-ui/core';
import "./Portal.css"

function Portal() {
	return (
		<div>
		<div className="signin">
			<form>
				<input className="input" name="username" placeholder="enter a username" />
				<input className="input" name="password" placeholder="enter a password" />
				<Button variant="contained">SIGNIN</Button>
			</form>
		</div>
		<div className="login">
			<form>
				<input className="input" name="username" placeholder="username" />
				<input className="input" name="password" placeholder="password" />
				<Button variant="contained">LOGIN</Button>
			</form>
		</div>
	</div>
	);
}

export default Portal;
