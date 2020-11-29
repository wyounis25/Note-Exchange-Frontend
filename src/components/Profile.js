import React from 'react'
import "./Profile.css"
import UserNote from './UserNote'
function Profile({notes,handleDelete}) {

    
    const user = JSON.parse(localStorage.getItem('userInfo'));
    console.log(user.note)
    return (
        <div className="profile">
            {notes = notes.map(note => {
                return <UserNote note = {note} handleDelete={handleDelete}/>
            })}
            <h2>{user.name}</h2>
            
        </div>
    )
}

export default Profile
