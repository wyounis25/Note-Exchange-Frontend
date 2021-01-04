import React, { useState } from 'react'
import './Navbar.css'
import PersonSharpIcon from '@material-ui/icons/PersonSharp'
import IconButton from '@material-ui/core/IconButton'
import NoteIcon from '@material-ui/icons/Note'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ShoppingCart from './ShoppingCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar({ userCart, handleLogout }) {
  const [cart, setCart] = useState(true)
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const goToProfile = () => {
    let path = `/profile/${user._id}`
    history.push(path)
  }

  const handleSession = () => {
    handleLogout()
  }

  const goHome = () => {
    let path = `/`
    history.push(path)
  }
  const closeCart = () =>{
    setCart(!cart)
  }

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <IconButton onClick={goToProfile}>
          <h4> {user.name}</h4>
        </IconButton>
      </div>

      <div className="navbar__center">
        <h1 onClick={goHome}>Note Exchange</h1>
      </div>


      <div className="navbar__right">
      <FontAwesomeIcon
        onClick={() => setCart(!cart)}
        className="navbar__icon"
        icon={['fas', 'cart-plus']}
      />
      </div>

	  
        <div className="navbar__cart">
          {cart ? null : <ShoppingCart closeCart={closeCart} userCart={userCart} />}
        </div>

      <Button
        className="navbar__logout"
        onClick={handleSession}
        color="secondary"
      >
        LOGOUT
      </Button>
    </div>
  )
}

export default Navbar
