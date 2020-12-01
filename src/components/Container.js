import React from 'react';
import './Container.css';
import NoteCard from './NoteCard';
function Container({ notes, filterCategory }) {
	//  console.log(notes)

	console.log(filterCategory);
	console.log(notes);
	return (
		<div className="container">
			{notes ? filterCategory ? (
				filterCategory.map((note) => {
					return <NoteCard note={note} />;
				})
			) : (
				notes.map((note) => {
					return <NoteCard note={note} />;
				})
			) : null}
		</div>
	);
}

export default Container;
