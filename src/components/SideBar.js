import React, { useState } from 'react';
import './SideBar.css';
import axios from 'axios';

function SideBar({ createNote }) {
	const [ newnote, setNewnote ] = useState();
	// {
	// 	category: category,
	// 	label: label,
	// 	content: content
	// }
	const [ category, setCategory ] = useState('');
	const [ label, setLabel ] = useState('');
	const [ content, setConent ] = useState('');

	const inputNotes = {};
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
            content: content,
            user: "5fb834ba4c227f6e872e507d"

        })
        
	}

	return (
		<div className="sidebar">
			<h3>Sidebar</h3>

			<form onSubmit={handleSubmit}>
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
	);
}

export default SideBar;
