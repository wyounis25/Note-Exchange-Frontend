import React from 'react'
import './Container.css'
import NoteCard from './NoteCard'
function Container({ allnote, notes, filterSelect, sortBy }) {
  //  console.log(notes)
  // console.log(sort)

  console.log(sortBy)
  const sortPrice = notes.sort((a, b, sortBy) => {
    if (a.price > b.price) return 1
    if (a.price < b.price) return -1
    if (sortBy === false) {
      return notes.reverse()
    } else {
      return 0
    }
  })
  const sortSubjects = filterSelect.sort((a, b) => {
    if (a.price > b.price) return 1
    if (a.price < b.price) return -1
    if (sortBy === false) {
      return notes
    } else {
      return notes.reverse()
    }
  })

  console.log(sortPrice)

  console.log(filterSelect)
  console.log(notes)
  return (
    <div className="container">
      {filterSelect.length < notes.length
        ? filterSelect.map((note) => {
            return <NoteCard allnote={allnote} note={note} />
          })
        : notes.map((note) => {
            return <NoteCard allnote={allnote} note={note} />
          })}
    </div>
  )
}

export default Container
