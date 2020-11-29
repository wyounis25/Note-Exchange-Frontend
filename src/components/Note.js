import React, { useState } from 'react';
import './NoteCard.css';

import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { useLocation } from 'react-router-dom';

function Note() {
	const [ comment, setcomment ] = useState('');
	const [ star, setstar ] = useState(null);
	const [ hover, sethover ] = useState(null);
	const currentUser = JSON.parse(localStorage.getItem('userInfo'));
	const location = useLocation();
	const mynote = location.state.note;

	console.log(mynote._id);

	const user = console.log(mynote.experiences.review);

	const handleChange = (e) => {
		console.log(e.target.value);
		e.preventDefault();
		setcomment(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit');
		fetch(`http://localhost:8000/notes/experiences/${mynote._id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${currentUser.token}`
			},
			body: JSON.stringify({
					rating: star,
					review: comment,
					user: currentUser._id,
					name: currentUser.name
			})
		}).then((res) => res.json().then((data) => console.log(data)));
	};

	console.log(comment);
	console.log(star);
	console.log(hover);
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
								{exp.name}:{exp.review}
							</p>
						);
					})}
					<form onSubmit={handleSubmit}>
						<h3>{currentUser.name}:</h3>
						<input onChange={handleChange} />

						{[ ...Array(5) ].map((star, i) => {
							const ratingvalue = i + 1;
							return (
								<label>
									<input type="radio" name="rating" value={ratingvalue} />
									<StarRoundedIcon
										style={{ color: ratingvalue <= (hover || star) ? '#bedbbb' : '#eeeeee' }}
										onClick={() => setstar(ratingvalue)}
										onMouseEnter={() => sethover(ratingvalue)}
										onMouseLeave={() => sethover(null)}
									/>
								</label>
							);
						})}

						<button type="submit">ENTER</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Note;
