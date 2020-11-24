import React from 'react'
import "./Profile.css"
import NoteCard from './NoteCard'
function Profile({notes}) {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    console.log(user.note)
    return (
        <div className="profile">
            {notes = notes.map(note => {
                return <NoteCard note = {note}/>
            })}
            <h2>{user.name}</h2>
            
        </div>
    )
}

export default Profile
