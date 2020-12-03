import React, { useState } from 'react';
import './SideBar.css';
import axios from 'axios';
import { faSlideshare } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@material-ui/core';

function SideBar({ createNote, filterCategory }) {
	const user = JSON.parse(localStorage.getItem('userInfo'));
	 const [ add, setadd ] = useState(false);
	const [ select, setselect ] = useState('');
	const [ price, setprice ] = useState('');
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

	const handleSelect = (e) => {
		setselect(e.target.value);
		filterCategory(select);
	};
	const handleAdd = () => {
		setadd(!add);
	};
	const handlePrice = (e) => {
		e.preventDefault();
		setprice(e.target.value);
	};

	console.log(price);
	console.log(select);

	return (
		<div className="sidebar">
			<div className="sidebar__new">
				<h2 onClick={handleAdd}>SELL YOUR NOTES</h2>
				<form onSubmit={handleSubmit}>
				{add ? (
					<>
						<input placeholder="Category" name="category" value={note.category} onChange={handleChange} />
						<input placeholder="Label" name="label" value={note.label} onChange={handleChange} />
						<input placeholder="Content" name="content" value={note.content} onChange={handleChange} />
						<input
							type="number"
							placeholder="$Price"
							name="price"
							value={note.price}
							onChange={handleChange}
						/>
						<Button type="submit" className="sidebarNew__button">SUBMIT</Button>
						</>
						) : null}
				</form>
			</div>
			<br />
			{/* <div>
				<div className="sidebar__category">
					<label>Category</label>
					<select name="category" onChange={handleSelect}>
						<option value="science" />
						<option value="science">Science</option>
						<option value="math">Math</option>
						<option value="history">History</option>
					</select>
				</div>
				<div className="sidebar__price">
					<label>Price</label>
					<select name="price" onChange={handlePrice}>
						<option value="science" />
						<option value="high">High to Low</option>
						<option value="low">Low to High</option>
					</select>
				</div>
			</div> */}
		</div>
	);
}

export default SideBar;
