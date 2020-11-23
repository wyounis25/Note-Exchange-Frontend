import React from 'react'
import "./Container.css"
import NoteCard from './NoteCard'
function Container({notes}) {
    //  console.log(notes)
    return (
        <div className="container">
            {notes = notes.map(note => {
                return <NoteCard note = {note}/>
            })}
        </div>
    )
}

export default Container
