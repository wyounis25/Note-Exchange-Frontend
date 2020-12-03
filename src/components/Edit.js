import React from 'react';
import './NoteCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@material-ui/core';

function Edit({updateNote}) {
	console.log("just got here")
	const location = useLocation();
	const history = useHistory()
	const mynote = location.state.note;
	console.log(mynote);
	const user = JSON.parse(localStorage.getItem('userInfo'));
	console.log("now here")

	const [ note, setNote ] = useState({
        _id: mynote._id,
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
		updateNote(note)
		let path = '/'
		history.push(path)
        console.log('THOUGH');
        
	};

	return (
		<div className="edit">
			<form onSubmit={handleSubmit}>
<input placeholder={mynote.category} name="category" value={note.category} onChange={handleChange} />

				<input placeholder={mynote.label} name="label" value={note.label} onChange={handleChange} />
				<input placeholder={mynote.content} name="content" value={note.content} onChange={handleChange} />
				<input type="number" placeholder={`$${mynote.price}`} name="price" value={note.price} onChange={handleChange} />
				<Button className="edit__btn" type="submit">UPDATE</Button>
			</form>

			<div >
				<h3>{mynote.category}</h3>
				<h4>{mynote.label}</h4>
				<img className="edited" src={mynote.content}/>
				<h4>
					<strong>{`$${mynote.price}`}</strong>
				</h4>
			</div>
		</div>
	);
}

export default Edit;
