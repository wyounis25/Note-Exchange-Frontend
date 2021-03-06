import React from 'react';
import './ShoppingCart.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function ShoppingCart({ userCart,closeCart }) {
	const history = useHistory();
	console.log(userCart);
	const user = JSON.parse(localStorage.getItem('userInfo'));
	const currentUser = userCart.filter((current) => {
		return current._id.includes(user._id);
	});

	const currentCart = currentUser.map((cart) => {
		return cart.carts;
	});
	let item;
	const items = currentCart.map((cart) => {
		return (item = cart);
	});
	const cartMap = {};
	const unique = item.filter((item, _) => {
		let alreadyExists = cartMap.hasOwnProperty(item.note);
		return alreadyExists ? false : (cartMap[item.note] = 1);
	});
	console.log(currentCart);
	console.log(currentUser);
	console.log(items);
	console.log(item);
	console.log(unique);


	const checkout = () => {
		const path = '/checkout';
		history.push(path, { unique: unique });
		closeCart()
	};



	let sum;
	let total = []
	unique.map((price) => {

		total.push(price.price);
		console.log(total);
		sum = total.reduce((a, b) => a + b, 0);
	});
	if(sum==="undefined"){

		sum = 0
	} 
	console.log(sum)
	console.log(unique.length);
	return (
			<div className="shopping">
				<h5>ITEMS</h5> 
				<p>
					<strong>{unique.length}</strong>
				</p>
				<br/>
				
				<h5>SUBTOTAL</h5> 
				{(sum===undefined)?
				<p><strong>{`$${0}`}</strong></p>
			:	<p><strong>{`$${sum}`}</strong></p>
			}
			<Button variant="outlined" className="checkout" onClick={checkout}>CHECKOUT</Button>
			</div>
	)
}

export default ShoppingCart;
