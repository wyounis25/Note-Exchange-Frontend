import React from 'react'
import "./Search.css"

function Search({handleSearch}) {
    return (
        <div className="search">
            <input placeholder = "SEARCH" onChange={handleSearch} className="serach__input"></input>
        </div>
    )
}

export default Search
