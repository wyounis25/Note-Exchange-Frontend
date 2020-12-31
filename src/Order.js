import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Payment from './Payment';
import './Order.css';

function Order({ sum, myCart }) {
	const [ email, setemail ] = useState('');
	console.log(email);

	// const validateEmail = (userEmail) => {
	// 	if () {
	// 		setemail(userEmail);
	// 	} else {
	// 		setemail('');
	// 	}
	//};

	return (
		<div className="orderForm">
			<h3>STEP 2 OF 3</h3>
			<br />
			<p>PLEASE PROVIDE A VALID EMAIL TO SEND THE NOTES</p>
			<br />
			<form>
				<input placeholder="email" onChange={(e) => setemail(e.target.value)} />
			</form>
			<br />
			<h3>STEP 3 OF 3</h3>
			{email.includes('@') && email.includes('.com') ? (
				<div className="order__paypal">
					<Payment sum={sum} email={email} myCart={myCart} />
				</div>
			) : null}
		</div>
	);
}

export default Order;
