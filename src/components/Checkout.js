import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Order from '../Order';
import './Checkout.css';

function Checkout() {
	const [ pay, setpay ] = useState(false);
	const location = useLocation();
	const myCart = location.state.unique;
	console.log(myCart);
	let total = [];
	let sum;
	myCart.map((price) => {
		total.push(price.price);
		console.log(total);
		sum = total.reduce((a, b) => a + b, 0);
	});
	const payRoute = () => {
		setpay(!pay);
	};
	console.log(sum);
	return (
		<div className="main">
			<div className="purchase">
				<h3>STEP 1 OF 3</h3>
				{myCart.map((item) => {
					return (
						<div className="purchase__items">
							<p>
								<strong>{item.label}</strong>
							</p>
							<p>{item.price}</p>
						</div>
					);
				})}
				
				<h2>
					<strong>{`$${sum}`}</strong>
				</h2>
				<div className="proceed__pay">

					<Button className="proceed"  onClick={payRoute}> PROCEED TO PAYMENT</Button>
				</div>
			
			</div>

			<div className="Order">{pay ? <Order sum={sum} myCart={myCart} /> : null}</div>
		</div>
	);
}

export default Checkout;
