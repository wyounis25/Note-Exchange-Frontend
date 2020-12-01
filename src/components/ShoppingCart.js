import React from 'react';
import './ShoppingCart.css';
function ShoppingCart({ userCart }) {
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

    const cartMap = {}
	const unique = item.filter((item, _)=> {
        let alreadyExists = cartMap.hasOwnProperty(item.note)
        return alreadyExists? false : cartMap[item.note] = 1
    })
	
	console.log(currentCart);
    console.log(currentUser);
	console.log(items);
	console.log(item);
	console.log(unique);
	return (
		<div>
			{unique.map((item) => {
				return (
					<p>
						{item.label}:{item.price}
					</p>
				);
			})}
		</div>
	);
}

export default ShoppingCart;
