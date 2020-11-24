import React, { useState } from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function Login({loginSession}) {
    const history = useHistory()
const [userSession, setuserSession] = useState({
    username: "",
    password: ""
})

    // console.log(userSession)

    const handleChange = (e) => {
        e.preventDefault()
        setuserSession({
            ...userSession,[e.target.name]: e.target.value
        })
        console.log(userSession)
    }
    const handleSubmit = (e) => {
        const createToken = ()=> {
            console.log("we here")
            e.preventDefault()
            loginSession(userSession)
        }
        const switchToHome = () => {
            let path = '/home'
            history.push(path)
        }
        createToken()
        // switchToHome()
    }

    return (
        <div className="login">
			<form onSubmit={handleSubmit}>
				<input className="input" name="username" placeholder="username" value={userSession.username} onChange={handleChange}/>
				<input className="input" name="password" placeholder="password" value={userSession.password} onChange={handleChange}/>
				<Button type="submit" variant="contained">LOGIN</Button>
			</form>
		</div>
    )
}

export default Login
