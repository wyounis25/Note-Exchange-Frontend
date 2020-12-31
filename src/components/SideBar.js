import React, { useState } from 'react';
import './SideBar.css';
import axios from 'axios';
import { faSlideshare, faSupple } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@material-ui/core';

function SideBar({ createNote, filterCategory }) {
	const user = JSON.parse(localStorage.getItem('userInfo'));
	 const [ add, setadd ] = useState(false);
	 const [ select, setselect ] = useState('');
	 const [ category, setcategory ] = useState('');
	 const [label, setlabel] = useState('')
	 const [fileName, setfileName] = useState("")
	 const [ price, setprice ] = useState(0);
	const [ note, setNote ] = useState({
		category: '',
		label: '',
		content:'',
		price: 0,
		user: user._id
	});
	const handlefile = (e) => {
		var image = (e.target.value).split("fakepath")
		let newImage = image[1]
		console.log(image)
		console.log(newImage)
		console.log(e.target.files[0])
		setfileName(e.target.files[0].name)
		setNote({
			...note,
			content:fileName
		})
		console.log(note.content)

	}
	
	const handleChange = (e) => {
		e.preventDefault();
	 	setNote({ ...note,
			[e.target.name]:e.target.value
		});
	};

	console.log(note)
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('THOUGH');
		createNote(note);
		
	};
	const handleAdd = () => {
		setadd(!add);
	};
	const handlePrice = (e) => {
		e.preventDefault();
		setprice(e.target.value);
	};
console.log(category)
console.log(fileName)
console.log(label)
	return (
		<div className="sidebar">
			<div className="sidebar__new">
	<h2 onClick={handleAdd}>SELL YOUR NOTES</h2>
				<br/>
				<form onSubmit={handleSubmit}>
				{add ? (
					<div className="sidebar__notes">
					<label>Category</label>
						<select  placeholder="Category" name="category" value={note.category} onChange={handleChange}>
						<option value="science">Science</option>
						<option value="math">Math</option>
						<option value="history">History</option>
						<option value="art">Art</option>
						<option value="finance">Finance</option>
						<option value="economics">Economics</option>
						</select>
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
						</div>
				) : null}
				</form>
			</div>
			<br />
			{/* <div>
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
