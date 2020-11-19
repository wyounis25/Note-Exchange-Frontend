import React from 'react';
import './Navbar.css';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import IconButton from '@material-ui/core/IconButton';
import NoteIcon from '@material-ui/icons/Note';

function Navbar() {
	return (
		<div className="navbar">
            <NoteIcon className="navbar__logo"/>
            <h1>NOTE EXCHANGE</h1>
			<IconButton>
				<PersonSharpIcon className="navbar__user"/>
			</IconButton>
		</div>
	);
}

export default Navbar;
