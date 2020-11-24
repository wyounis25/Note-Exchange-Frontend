import React, { useState } from 'react';
import './SideBar.css';
import axios from 'axios';

function SideBar({ createNote }) {
	const user = JSON.parse(localStorage.getItem('userInfo'))
	console.log(user)
	const [ note, setNote ] = useState({
		category: '',
		label: '',
		content: '',
		price: 0,
		user: user._id
	});

	const handleChange = (e) => {
		e.preventDefault();
		setNote({
			...note,
			[e.target.name]: e.target.value
		});
		console.log(note);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('THOUGH');
		createNote(note);
		
	};

	return (
		<div className="sidebar">
			<div className="sidebar__new">
				<form onSubmit={handleSubmit}>
					<input placeholder="Category" name="category" value={note.category} onChange={handleChange} />
					<input placeholder="Label" name="label" value={note.label} onChange={handleChange} />
					<input placeholder="Content" name="content" value={note.content} onChange={handleChange} />
					<input type = "number" placeholder="$Price" name="price" value={note.price} onChange={handleChange} />
					<button>Submit</button>
				</form>
			</div>
			<div>
				<div className="sidebar__category">
					<label>Category</label>
					<select name="category">
						<option value="science" />
						<option value="science">Science</option>
						<option value="math">Math</option>
						<option value="history">History</option>
					</select>
				</div>
				<div className="sidebar__price">
					<label>Price</label>
					<select name="price">
						<option value="science" />
						<option value="science">High to Low</option>
						<option value="math">Low to High</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
