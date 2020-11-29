import React from 'react';
import './Container.css';
import NoteCard from './NoteCard';
function Container({ notes }) {
	//  console.log(notes)
	console.log(notes)
	return (
		<div className="container">
			{notes ? (
				notes.map((note) => {
					return <NoteCard note={note} />;
				})
			) : null}
		</div>
	);
}

export default Container;
