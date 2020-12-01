import React from 'react';
import PaymentIcon from '@material-ui/icons/Payment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Payment() {
	return (
		<div>
			<form>
				<label>
					<FontAwesomeIcon icon={[ 'fab', 'paypal' ]} />

					<input type="radio" name="payment" />
				</label>
				<label>
					<FontAwesomeIcon icon={[ 'fab', 'cc-visa' ]} />
					<input type="radio" name="payment" />
				</label>
				<label>
					<FontAwesomeIcon icon={[ 'fab', 'apple-pay' ]} />
					<input type="radio" name="payment" />
				</label>
			</form>
		</div>
	);
}

export default Payment;
