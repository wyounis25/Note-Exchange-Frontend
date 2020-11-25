import React, { useState } from 'react';
import './NoteCard.css';
import { Button } from '@material-ui/core';
function NoteCard({ note }) {
	const [ currentNote, setCurrentNote ] = useState(false);
	const user = JSON.parse(localStorage.getItem('userInfo'));

	// if (note.user == user._id) {
	// 	 setCurrentNote(true)
	// }

	// checkNote()
	// console.log(note.user);
	// console.log(user._id);
	return (
		<div className="note">
			<h3>{note.category}</h3>
			<h4>{note.label}</h4>
			<p>{note.content}</p>
			<h4>
				<strong>{`$${note.price}`}</strong>
			</h4>
		</div>
	);
}

export default NoteCard;
