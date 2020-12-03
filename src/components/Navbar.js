import React, {  useState } from 'react';
import './Navbar.css';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import IconButton from '@material-ui/core/IconButton';
import NoteIcon from '@material-ui/icons/Note';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCart from './ShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Navbar({userCart}) {
	const [cart, setCart] = useState(true)
	const history = useHistory();
	const user = JSON.parse(localStorage.getItem('userInfo'));
	const goToProfile = () => {
		let path = `/profile/${user._id}`;
		history.push(path);
	};

	const handleSession = () => {
		localStorage.clear();
		let path = `/`;
		history.push(path);
	};

	const goHome = () => {
		let path = `/home`;
		history.push(path);
	};


	return (
		<div className="navbar">
			<IconButton onClick={goToProfile} className="navbar__logo">
				<h4>{user? user?.name : 'welcome'}</h4>
				</IconButton>
			<div className="navbar__center">
				<h1 onClick={goHome}>NOTE EXCHANGE</h1>
			</div>
				

		<div className="navbar__right">
			 
				<FontAwesomeIcon  onClick={()=>setCart(!cart)} className="navbar__icon"  icon={[ 'fas', 'shopping-cart' ]}/>
			
			{cart? null: <ShoppingCart userCart={userCart} />}
		</div>

			<Button className= "navbar__logout" onClick={handleSession}  color="secondary">
				LOGOUT
			</Button>
		</div>
	);
}

export default Navbar;
