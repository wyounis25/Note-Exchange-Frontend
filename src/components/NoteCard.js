import React from 'react'
import './NoteCard.css'
function NoteCard({note}) {
    console.log(note)
    return (

        <div className="note">
            <h1>{note.category}</h1>
            <h2>{note.label}</h2>
            <p>{note.content}</p>
        </div>
        
    )
}

export default NoteCard
