import React from 'react';
import './Container.css';
import NoteCard from './NoteCard';
function Container({ allnote, notes, filterSelect, sortBy }) {
	//  console.log(notes)
	// console.log(sort)

	const sortPrice = notes.sort((a, b) => {
		if (a.price > b.price) return 1;
		if (a.price < b.price) return -1;
		if (sortBy === true) {
			return notes.reverse()
		} else {
			return 0
		}
	});

	
	console.log(sortPrice)

	console.log(filterSelect);
	console.log(notes);
	return (
		<div className="container">
			{filterSelect.length === 1 ? (
				filterSelect.map((note) => {
					return <NoteCard allnote={allnote} note={note} />;
				})
			) : (
				sortPrice.map((note) => {
					return <NoteCard allnote={allnote} note={note} />;
				})
			)}
		</div>
	);
}

export default Container;
