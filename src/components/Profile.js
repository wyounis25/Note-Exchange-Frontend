import React from 'react'
import "./Profile.css"
import UserNote from './UserNote'
function Profile({notes, handleDelete}) {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    return (
        <div className="profile">
            {notes = notes.map(note => {
                return <UserNote note = {note} handleDelete={handleDelete}/>
            })}
        </div>
    )
}

export default Profile
