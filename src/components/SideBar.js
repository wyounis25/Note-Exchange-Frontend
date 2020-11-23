import React, { useState } from 'react';
import './SideBar.css';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function SideBar({ userToken }) {
	const [ category, setCategory ] = useState('');
	const [ label, setLabel ] = useState('');
	const [ content, setConent ] = useState('');

	
	console.log(category);
	console.log(label);
	console.log(content);
	// console.log(label)
	// console.log(content)
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('THOUGH');
		axios.post('http://localhost:8000/notes', {
			category: category,
			label: label,
			content: content
			// user: decode.id
		});
	};

	// console.log(userToken)
	// var decode = jwt_decode(userToken)
	// console.log(decode)
	// console.log(decode.id)
	return (
		<div className="sidebar">
			<div className="sidebar__new">
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						placeholder="Category"
						name="category"
						value={category}
						onChange={(e) => {
							setCategory(e.target.value);
						}}
					/>
					<input
						placeholder="Label"
						name="label"
						value={label}
						onChange={(e) => {
							setLabel(e.target.value);
						}}
					/>
					<input
						placeholder="Content"
						name="content"
						value={content}
						onChange={(e) => {
							setConent(e.target.value);
						}}
					/>
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
