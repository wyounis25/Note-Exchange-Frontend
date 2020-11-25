import React from 'react';
import './Navbar.css';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import IconButton from '@material-ui/core/IconButton';
import NoteIcon from '@material-ui/icons/Note';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Navbar() {
	const history = useHistory();
	const user = JSON.parse(localStorage.getItem('userInfo'));

	const goToProfile = () => {
		let path = `/profile/${user._id}`;
		history.push(path);
	};

	const handleSession = () => {
		localStorage.clear();
		let path = `/`;
		history.push(path);
	};

	const goHome = () => {
		let path = `/home`;
		history.push(path);
	};

	return (
		<div className="navbar">
			<NoteIcon className="navbar__logo" />
			<IconButton>
				<h1 onClick={goHome}>NOTE EXCHANGE</h1>
			</IconButton>
			{/* <h3>{user.name}</h3> */}
			<IconButton>
				<PersonSharpIcon className="navbar__user" />
			</IconButton>
			<IconButton onClick={goToProfile}>
				<h4>{user ? user.name : 'welcome'}</h4>
			</IconButton>
			<Button onClick={handleSession} variant="outlined" color="secondary">
				LOGOUT
			</Button>
		</div>
	);
}

export default Navbar;
