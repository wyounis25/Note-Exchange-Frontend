import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Payment from './Payment';

function Order() {
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
		<div>
			<h3>BOUT TO ORDER</h3>
			<p>WHATS YOUR EMAIL</p>
			<form>
				<input onChange={(e) => setemail(e.target.value)}/>
			</form>
			<h3>PAYMENT METHOD</h3>
            {(email.includes('@') && email.includes('.com')) ?
             <Payment/> 
             : null}
		</div>
	);
}

export default Order;
