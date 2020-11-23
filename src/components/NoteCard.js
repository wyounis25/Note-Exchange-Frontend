import React from 'react';
import './NoteCard.css';
function NoteCard({ note }) {
	console.log(note);
	return (
		
			<div className="note">
				<h3>{note.category}</h3>
				<h4>{note.label}</h4>
				<p>{note.content}</p>
			</div>
	
	);
}

export default NoteCard;
