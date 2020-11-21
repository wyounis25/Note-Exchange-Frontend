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

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get('http://localhost:8000/notes');
			///console.log(request.data)
			setnotes(request.data);
		}
		fetchData();
		console.log(notes);
	}, []);

	// const createNote  = (newNote) =>  {
	// 	axios.post("http://localhost:8000/notes").then(res => console.log(res))

	// }
	
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/home">
						<Search />
						<SideBar />
						<Container notes={notes} />
					</Route>
					<Route path="/">
						<Portal />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
