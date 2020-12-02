import React from 'react';
import './ShoppingCart.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function ShoppingCart({ userCart }) {
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
	};
	let sum;
	let total = []
	unique.map((price) => {

		total.push(price.price);
		console.log(total);
		sum = total.reduce((a, b) => a + b, 0);
	});
	console.log(unique.length);
	return (
		<div>
			<div>
				<h4>ITEMS</h4> :
				<p>
					<strong>{unique.length}</strong>
				</p>
			</div>
			<div>
				<h4>SUBTOTAL</h4> :
				<p><strong>{`$${sum}`}</strong></p>
			</div>
			{/* {unique.map((item) => {
				return (
					<p>
						{item.label}:{item.price}
					</p>
				);
			})} */}
			<Button onClick={checkout}>CHECKOUT</Button>
		</div>
	);
}

export default ShoppingCart;
