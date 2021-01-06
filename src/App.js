import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Portal from './components/Portal';
import Home from './Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar';

function App() {
	const [ Category, setCategory ] = useState('');
	const [ notes, setnotes ] = useState([]);
	const [ users, setUsers ] = useState([]);
	const [ token, setToken ] = useState('');
	const [ search, setSearch ] = useState('');
	library.add(fab,fas)
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
		console.log("we hit this")
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
				console.log(data)
				localStorage.setItem('userInfo', JSON.stringify(data));
				localStorage.token = data.token;
				console.log(localStorage.token);
				setToken(localStorage.token);
			})
	}

	const user = JSON.parse(localStorage.getItem('userInfo'));

	return (
		<div className="App">
			{!user? <Portal loginSession={loginSession} signUpSession={signUpSession} /> : <Home />}
			{/* <Footer/> */}
		</div>
	)

}

export default App;
