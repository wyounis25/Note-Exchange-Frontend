import React, { useState } from 'react';
import './NoteCard.css';
import { Button, createChainedFunction, IconButton } from '@material-ui/core';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

function Note({ notes, allUsers, updateExperience }) {
	const [ comment, setcomment ] = useState('');
	const [ star, setstar ] = useState(null);
	const [ hover, sethover ] = useState(null);
	const [ cart, setcart ] = useState([]);

	// const [mynotes, setmynotes] = useState([])
	const currentUser = JSON.parse(localStorage.getItem('userInfo'));
	const location = useLocation();
	const mynote = location.state.note;

	console.log(mynote);
	console.log(notes);
	console.log(allUsers);
	// setmynotes(mynote)
	const user = console.log(mynote.experiences.review);

	const handleChange = (e) => {
		console.log(e.target.value);
		e.preventDefault();
		setcomment(e.target.value);
	};
	const userObject = allUsers.filter((current) => {
		return current._id == currentUser._id;
	});

	const arrCarts = userObject.map((cart) => {
		return cart.carts;
	});
	console.log(arrCarts);

	let carts;
	const allCarts = arrCarts.map((cart) => {
		return (carts = cart);
	});

	console.log(carts);
	const handleClick = () => {
		console.log(currentUser._id);
		fetch(`http://localhost:8000/users/carts/${currentUser._id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${currentUser.token}`
			},
			body: JSON.stringify({
				category: mynote.category,
				label: mynote.label,
				price: mynote.price,
				note: mynote._id
			})
		}).then((res) =>
			res.json().then((data) => {
				setcart(data);
				let notearr = data.carts.map((itm) => {
					return itm.note;
				});
				console.log(notearr);
				let count = {};
				let newarr = [];
				for (var i = 0; i < notearr.length; i++) {
					var num = notearr[i];
					count[num] = count[num] ? count[num] + 1 : 1;
					newarr.push(count);
				}
				console.log(newarr);

				let sliceArr = newarr.splice(0, 1);
				console.log(sliceArr);
				sliceArr.map((element) => {
					return console.log(element.value);
				});
			})
		);
	};

	console.log(cart);
	console.log(mynote);
	// NEED HELP WITH REFRESH
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
		})
			.then((res) => res.json())
			.then((data) => {
				updateExperience(data);
				console.log(data);
			});
	};

	console.log(mynote.experiences);
	console.log(comment);
	console.log(star);
	console.log(hover);
	return (
		<div className="notes">
			<div className="user__note">
			<div className="add__cart">
				<FontAwesomeIcon onClick={handleClick}  icon={[ 'fas', 'cart-plus' ]} />
				</div>
				<h3 className="header">{mynote.category}</h3>
				<h4>{mynote.label}</h4>
				<p>{mynote.content}</p>
				<h4>
					<strong>{`$${mynote.price}`}</strong>
				</h4>

			
				
				<form onSubmit={handleSubmit}>
					<div className="experience">

				
					<input className="user__comment" onChange={handleChange} />
					</div>

					{[ ...Array(5) ].map((star, i) => {
						const ratingvalue = i + 1;
						return (
							<label>
								<input className="radio__btn" type="radio" name="rating" value={ratingvalue} />
								<StarRoundedIcon
									style={{ color: ratingvalue <= (hover || star) ? '#ffd369' : '#bbbbbb' }}
									onClick={() => setstar(ratingvalue)}
									onMouseEnter={() => sethover(ratingvalue)}
									onMouseLeave={() => sethover(null)}
								/>
							</label>
						);
					})}

					<Button className="review__btn" type="submit">ENTER</Button>
				</form>
				
			</div>
			<div className="Review">
				<h2>REVIEWS</h2>
				{mynote.experiences.map((exp) => {
					return (
						<>
							<p className="comments">
							<strong>{exp.name}</strong>
						</p>
						<p className="users">

							{exp.review}
						</p>
						<hr/>
							</>
					);
				})}
			</div>
		</div>
	);
}

export default Note;
