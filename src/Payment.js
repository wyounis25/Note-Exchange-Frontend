import React, { useEffect, useState } from 'react';
import PaymentIcon from '@material-ui/icons/Payment';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Payment({ sum, email, myCart }) {
	console.log(sum)
	console.log(email)
	console.log(myCart)
	let noteId = []
	console.log(myCart.map(element => {
		return noteId = element._id
	}))
	console.log(noteId)
	const user = JSON.parse(localStorage.getItem('userInfo'));
	const [ sdkReady, setSdkReady ] = useState(false);
	useEffect(() => {
		const addPayPalScript = async () => {
			const { data: clientId } = await axios.get('http://localhost:8000/paypal');
			const script = document.createElement('script');
			script.type = 'type/javascript';
			script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
			script.async = true;
			script.onload = () => {
				setSdkReady(true);
			};
			document.body.appendChild(script);
		};
		addPayPalScript();
	}, []);

	const paymentHandler = (paymentResult) => {
		return fetch('http://localhost:8000/transactions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				user: user._id,
				amount: sum,
				email: email,
				notes: myCart,
				// label: myCart.label
			})
		}).then(res => res.json()).then(data => console.log(data))

		console.log(paymentResult);
	};

	return (
		<div>
			<form>
				<label>
					<PayPalButton amount={sum} onSuccess={paymentHandler} />
					{/* <FontAwesomeIcon icon={[ 'fab', 'paypal' ]}
					 /> */}
				</label>
			</form>

					</div>
				// 	<input type="radio" name="payment" />
				// </label>
				// <label>
				// 	<FontAwesomeIcon icon={[ 'fab', 'cc-visa' ]} />
				// 	<input type="radio" name="payment" />
				// </label>
				// <label>
				// 	<FontAwesomeIcon icon={[ 'fab', 'apple-pay' ]} />
				// 	<input type="radio" name="payment" />
	);
}

export default Payment;
