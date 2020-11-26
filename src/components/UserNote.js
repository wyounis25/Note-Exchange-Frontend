import React, { useState } from 'react';
import './NoteCard.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function UserNote({ note, handleDelete}) {
const history = useHistory()
   
	const handleClick = (id)=> {
		let path = `/edit/${id}`
		history.push(path, {note:note})
	}

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
				
				<Button onClick={()=>handleClick(note._id)} color="primary">EDIT</Button>
			</div>
		</div>
	);
}

export default UserNote;
