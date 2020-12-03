import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SideBar from './components/SideBar';
import Container from './components/Container';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Portal from './components/Portal';
import axios from 'axios';
import Profile from './components/Profile';
import Edit from './components/Edit';
import Note from './components/Note';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Subject from './Subject';
import { set } from 'mongoose';

function Home() {
	const [ Category, setCategory ] = useState('');
	const [ notes, setnotes ] = useState([]);
	const [ users, setUsers ] = useState([]);
	const [ token, setToken ] = useState('');
	const [ transactionss, settransactions ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ currentReview, setcurrentReview ] = useState();
	const [ newCart, setnewCart ] = useState([]);

	const user = JSON.parse(localStorage.getItem('userInfo'));
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get('http://localhost:8000/notes');
			setnotes(request.data);
		}
		async function fetchUser() {
			const request = await axios.get('http://localhost:8000/users');
			setUsers(request.data);
		}
		// async function fetchTransaction() {
		// 	const request = await axios.get('http://localhost:8000/transactions');
		// 	transactions(request.data);
		// }
		// fetchTransaction()
		fetchData();
		fetchUser();
	}, []);
	// console.log(users);
	console.log(notes);
	const handleSearch = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		setSearch(e.target.value);
	};
	const createNote = (newNote) => {
		console.log(newNote);
		fetch('http://localhost:8000/notes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				category: newNote.category,
				label: newNote.label,
				content: newNote.content,
				price: newNote.price,
				user: user._id
			})
		})
			.then((res) => res.json())
			.then((data) => {
				setnotes([ ...notes, data ]);
			});
	};

	const updateExperience = (star, comment, note) => {
		console.log(star);
		console.log(comment);
		console.log(note);
		fetch(`http://localhost:8000/notes/experiences/${note._id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${user.token}`
			},
			body: JSON.stringify({
				rating: star,
				review: comment,
				user: user._id,
				name: user.name
			})
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const updateReview = notes.filter((note) => (note.experiences = data.experiences));
				console.log(updateReview);
				// const updateReview =  notes.filter(note => note._id = data._id)
				setnotes(updateReview);
				// console.log(updateReview)
			});
	};

	const updateNote = (updatedNote) => {
		console.log(updatedNote._id);
		fetch(`http://localhost:8000/notes/${updatedNote._id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				category: updatedNote.category,
				label: updatedNote.label,
				content: updatedNote.content,
				price: updatedNote.price,
				user: user._id
			})
		})
			.then((res) => res.json())
			.then((data) => {
				const updateNote = notes.filter((note) => (note._id = data._id));
				setnotes(updateNote);
			});
	};

	const handleDelete = (id) => {
		console.log(id);
		// setnotes({
		fetch(`http://localhost:8000/notes/${id}`, { method: 'DELETE' }).then(() => {
			const newNote = notes.filter((note) => note._id != id);
			setnotes(newNote);
		});
		console.log(notes);
		// })
	};
	console.log(notes);
	const filterSearch = notes.filter((note) => {
		return note.label.toLowerCase().includes(search.toLowerCase());
	});

	const updateCart = (cart) => {
		setnewCart(cart);
	};

	// const addedNewCart = transitions.filter(transaction => transaction._id = transactionss._id)

	const filterNotes = notes.filter((note) => {
		return note.user.includes(user._id);
	});
	let currentCategory;
	const filterCategory = (newCategory) => {
		return (currentCategory = notes.filter((note) => {
			note.category.toLowerCase().includes(newCategory.toLowerCase());
		}));
	};
	const handleLogout = () => {
		localStorage.clear()
		setUsers(null)
	  }
	console.log(currentCategory);
	return (
		<Router>
				
			<div>
				<Navbar userCart={users} handleLogout={handleLogout}/>
				<Switch>
					<Route path="/profile/:id">
						<Profile notes={filterNotes} handleDelete={handleDelete} />
					</Route>
					<Route path="/edit/:id">
						<Edit updateNote={updateNote} />
					</Route>
					<Route path="/note/:id/">
						<Note
							updateCart={updateCart}
							notes={notes}
							allUsers={users}
							updateExperience={updateExperience}
						/>
					</Route>
					<Route path="/shoppingcart">
						<ShoppingCart />
					</Route>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/">
						<Search handleSearch={handleSearch} />
						<br />
						<SideBar createNote={createNote} filterCategory={filterCategory} />
						<br />
						<Subject />
						<Container notes={filterSearch} allnote={notes} filterCategory={currentCategory} />
					</Route>
				</Switch>
				<Footer />
			</div>

		</Router>
	);
}

export default Home;
