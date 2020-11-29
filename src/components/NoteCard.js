import React, { useState } from 'react';
import './NoteCard.css';
import { Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router-dom';
function NoteCard({ note }) {
	const history = useHistory()

	const user = JSON.parse(localStorage.getItem('userInfo'));
	const arr = note.experiences.map((exp) => {
		return exp.rating;
	});
	let sum = '';
	if (arr.length > 0) {
		sum = arr.reduce(function(a, b) {
			return a + b;
		});
	}
	console.log(arr);
	console.log(sum);

	const ave = (sum / arr.length).toFixed(1);
	console.log(ave);

	

	const notePage = (id) => {
		let path = `/note/${id}`
		history.push(path, {note:note})
	}
	return (
		<div className="note"
		onClick={()=>notePage(note._id)}
		>
			<h3>{note.category}</h3>
			<h4>{note.label}</h4>
			<p>{note.content}</p>

			<p>
				{isNaN(ave) ? (
					<div>
						<p>0</p>
						<StarBorderIcon />
					</div>
				) : (
					<div>
						<p>{ave} </p> <StarIcon />
					</div>
				)}
			</p>
			<h4>
				<strong>{`$${note.price}`}</strong>
			</h4>
		</div>
	);
}

export default NoteCard;
