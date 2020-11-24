import React from 'react';
import './Navbar.css';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import IconButton from '@material-ui/core/IconButton';
import NoteIcon from '@material-ui/icons/Note';
import { useHistory } from 'react-router-dom';

function Navbar() {
	const history = useHistory()
	const user = JSON.parse(localStorage.getItem('userInfo'));

	const goToProfile = () => {
		let path = `/profile/${user._id}`;
		history.push(path);
	};
	
	return (
		<div className="navbar">
			<NoteIcon className="navbar__logo" />
			<h1>NOTE EXCHANGE</h1>
			{/* <h3>{user.name}</h3> */}
			<IconButton>
				<PersonSharpIcon className="navbar__user" />
			</IconButton>
			<IconButton onClick={goToProfile}>
				<h4>"hi</h4>
			</IconButton>
		</div>
	);
}

export default Navbar;
