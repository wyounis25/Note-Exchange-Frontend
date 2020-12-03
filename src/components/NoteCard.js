import React, { useState } from 'react';
import './NoteCard.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router-dom';
function NoteCard({ note, allnote }) {
	const history = useHistory();
	const [ hover, sethover ] = useState(false);
	let reviewCount;
	console.log(
		allnote.map((experience) => {
			return (reviewCount = experience.experiences);
		})
	);

	console.log(reviewCount);
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
		let path = `/note/${id}`;
		history.push(path, { note: note });
	};
	return (
		<div>
			<div
				className="note"
				// onMouseEnter={sethover(!hover)}
				onClick={() => notePage(note._id)}
			>
				<h3>{note.category}</h3>
				<h4>{note.label}</h4>
				<img src={note.content}/>
				<h2>
					<strong>{`$${note.price}`}</strong>
				</h2>
				<p>
					{isNaN(ave) ? (
						<div className="note__reviews">
							<StarBorderIcon />
							<p>0</p>
						</div>
					) : (
						<div className="note__reviews">
							<p>
								<StarIcon className="star" size="large" style={{ color: '#ffd369' }} />
								<strong>{ave}</strong>
							</p>
						</div>
					)}
				</p>
				<div className="note__star">
					<p>(<strong>{note.experiences.length}</strong>)</p>
					
					<p>reviews</p>
				</div>
			</div>
		</div>
	);
}

export default NoteCard;
