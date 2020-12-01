import './App.css';
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

function App() {
	const [Category, setCategory] = useState('')
	const [ notes, setnotes ] = useState([]);
	const [ users, setUsers] = useState([])
	const [ token, setToken ] = useState('');
	const [ search, setSearch ] = useState('');

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get('http://localhost:8000/notes');
			setnotes(request.data);
		}
		async function fetchUser() {
			const request = await axios.get('http://localhost:8000/users');
			setUsers(request.data);
		}
		fetchData();
		fetchUser();
	}, []);
	console.log(users)

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		setSearch(e.target.value);
	};

	const loginSession = (currentUser) => {
		fetch('http://localhost:8000/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				username: currentUser.username,
				password: currentUser.password
			})
		})

			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				localStorage.setItem('userInfo', JSON.stringify(data));
				console.log(localStorage.token);
				setToken(localStorage.token);
			});

	};

	const signUpSession = (currentUser) => {
		fetch('http://localhost:8000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},

			body: JSON.stringify({
				name: currentUser.name,
				username: currentUser.username,
				password: currentUser.password
			})

		})

			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				localStorage.setItem('userInfo', JSON.stringify(data));
				localStorage.token = data.token;
				console.log(localStorage.token);
				setToken(localStorage.token);
			});

	};

	const user = JSON.parse(localStorage.getItem('userInfo'));

	const createNote = (newNote) => {
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
				setnotes(...notes, data);
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
				setnotes({ ...notes, data });
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
	
	const filterSearch = notes.filter((note) => {
		return note.label.toLowerCase().includes(search.toLowerCase());
	});

	const filterNotes = notes.filter((note) => {
			return note.user.includes(user._id);
	});
	let currentCategory
	const filterCategory = (newCategory) => {
		return (
			currentCategory = notes.filter((note) => {
			note.category.toLowerCase().includes(newCategory.toLowerCase());
		   }))
	};
	
console.log(currentCategory)

	return (
		<Router>
			<div className="App">
				<Navbar userCart={users}/>
				<Switch>
					<Route path="/home">
						<Search handleSearch={handleSearch} />
						<SideBar createNote={createNote} filterCategory={filterCategory} />
						<Container notes={filterSearch} filterCategory={currentCategory} />
					</Route>
					<Route path="/profile/:id">
						<Profile notes={filterNotes} handleDelete={handleDelete} />
					</Route>
					<Route path="/edit/:id">
						<Edit updateNote={updateNote} />
					</Route>
					<Route path="/note/:id/">
						<Note allUsers={users}/>
					</Route>
					<Route path="/shoppingcart">
						<ShoppingCart />
					</Route>
					<Route path="/welcome">
						<Portal signUpSession={signUpSession} loginSession={loginSession} />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
