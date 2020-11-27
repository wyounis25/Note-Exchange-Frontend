import React from 'react';
import './NoteCard.css';
import { useLocation } from 'react-router-dom';
function Note() {
	const location = useLocation();
	const mynote = location.state.note;
	console.log(mynote);

	const review = mynote.experiences.map((exp) => {
		return exp.review;
	});
	const user = console.log(mynote.experiences.review);

	console.log(mynote.experiences);
	console.log(review);

	console.log(user);
	return (
		<div className="notes">
			<div className="note">
				<h3>{mynote.category}</h3>
				<h4>{mynote.label}</h4>
				<p>{mynote.content}</p>
				<h4>
					<strong>{`$${mynote.price}`}</strong>
				</h4>
				<div>
					<h2>Reviews</h2>
					{mynote.experiences.map((exp) => {
						return (
							<p>
								{exp.user}:{exp.review}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Note;
