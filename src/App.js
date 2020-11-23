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

function App() {
	const [ notes, setnotes ] = useState([]);
	const [ token, setToken ] = useState('');
	const [ search, setSearch ] = useState('');

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get('http://localhost:8000/notes');
			///console.log(request.data)
			setnotes(request.data);
		}
		fetchData();
		console.log(notes);
	}, []);

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
				localStorage.token = data.token;
				setToken(localStorage.token);
			});
	};
	const filterSearch = notes.filter((note) => {
		return note.label.toLowerCase().includes(search.toLowerCase());
	});
	console.log(token);

	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/home">
						<Search handleSearch={handleSearch} />
						<SideBar userToken={token} />
						<Container notes={filterSearch} />
					</Route>
					<Route path="/">
						<Portal loginSession={loginSession} />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
