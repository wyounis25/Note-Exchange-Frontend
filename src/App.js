import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SideBar from './components/SideBar';
import Container from './components/Container';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Portal from './components/Portal';
function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/home">
						<Search />
						<SideBar />
						<Container />
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
