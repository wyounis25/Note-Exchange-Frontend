import React from 'react'
import './SignIn.css'
import { Button } from '@material-ui/core'
function SignIn() {
    return (
        <div className="signin">
			<form>
				<input className="input" name="username" placeholder="enter a username" />
				<input className="input" name="password" placeholder="enter a password" />
				<Button variant="contained">SIGNIN</Button>
            
			</form>
		</div>
    )
}

export default SignIn
