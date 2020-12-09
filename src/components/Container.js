import React from 'react';
import './Container.css';
import NoteCard from './NoteCard';
function Container({ allnote, notes,filterSelect }) {
	//  console.log(notes)

	console.log(filterSelect);
	console.log(notes);
	return (
		<div className="container">
			{filterSelect.length === 1? 
			filterSelect.map((note) => {
				return <NoteCard allnote={allnote} note={note} />;
			}):
			notes.map((note) => {
				return <NoteCard allnote={allnote} note={note} />;
			})
		}
		</div>
	);
}

export default Container;
