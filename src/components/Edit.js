import React from 'react';

function Edit() {

    // const user = JSON.parse(localStorage.getItem('userInfo'))
	// console.log(user)
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
		<div className="edit">
			<form onSubmit={handleSubmit}>
				<input placeholder="Category" name="category" value={note.category} onChange={handleChange} />
				<input placeholder="Label" name="label" value={note.label} onChange={handleChange} />
				<input placeholder="Content" name="content" value={note.content} onChange={handleChange} />
				<input type="number" placeholder="$Price" name="price" value={note.price} onChange={handleChange} />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default Edit;
