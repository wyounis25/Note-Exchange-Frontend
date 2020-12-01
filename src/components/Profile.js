import React from 'react'
import "./Profile.css"
import UserNote from './UserNote'
function Profile({notes, handleDelete}) {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    return (
        <div className="profile">
        <h2>{user.name}</h2> 
            {notes = notes.map(note => {
                return <UserNote note = {note} handleDelete={handleDelete}/>
            })}
        </div>
    )
}

export default Profile
