import React from 'react';
import './NoteCard.css';
import { Button } from '@material-ui/core';

function UserNote({ note, handleDelete}) {

   
	return (
		<div className="note">
			<h3>{note.category}</h3>
			<h4>{note.label}</h4>
			<p>{note.content}</p>
			<h4>
				<strong>{`$${note.price}`}</strong>
			</h4>
			<div>
				<Button onClick={()=> handleDelete(note._id)} color="secondary">DELETE</Button>
				<Button color="primary">EDIT</Button>
			</div>
		</div>
	);
}

export default UserNote;
