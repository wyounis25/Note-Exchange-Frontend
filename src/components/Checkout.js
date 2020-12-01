import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Order from '../Order';

function Checkout() {
    const [pay, setpay] = useState(false)
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
        setpay(!pay)
    }
	console.log(sum);
	return (
		<div>
			<h3>WHAT WE BOUT TO BUY</h3>
			{myCart.map((item) => {
				return (
					<div>
						<p>{item.label}</p>
						<p>{item.price}</p>
					</div>
				);
			})}
			<h3>PRICE WE BOUT TO PAY </h3>
			<h2>{sum}</h2>
            
			<h3/>
            <Button onClick={payRoute}> PAY</Button>
            {pay? <Order/> : null}

		</div>
	);
}

export default Checkout;
