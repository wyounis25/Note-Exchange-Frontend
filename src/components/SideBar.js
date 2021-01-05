import React, { useState } from 'react'
import './SideBar.css'
import axios from 'axios'
import { faSlideshare, faSupple } from '@fortawesome/free-brands-svg-icons'
import { Button } from '@material-ui/core'
import Input from '@material-ui/core/Input';

function SideBar({ createNote, filterCategory }) {
  let user = JSON.parse(localStorage.getItem('userInfo'))
  const [add, setadd] = useState(false)
  const [select, setselect] = useState('')
  const [category, setcategory] = useState('')
  const [label, setlabel] = useState('')
  const [fileName, setfileName] = useState("")
  const [price, setprice] = useState(0)
 
    if(user){
      user = ""
    }

  const [note, setNote] = useState({
    category: '',
    label: '',
    content: "",
    price: 0,
    user: user._id,
  })

  const handlefile = (e) => {
    console.log(e.target.files[0])
    setfileName(e.target.files[0].name)
    console.log(fileName)
    setNote({
      ...note,
      content: fileName,
    })

    console.log(note.content)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  

  console.log(note)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('THOUGH')
    createNote(note)
  }
  const handleAdd = () => {
    const title = document.getElementById('sidebar__title')
    const header = document.getElementById("sidebar__header")
    console.log(header)
    setadd(!add)
    if (!add) {
      title.innerText = 'CLOSE'
      title.style.color = '#7c9473'
      header.style.backgroundColor = "white"
    } else {
      title.innerText = 'SELL YOUR NOTES'
      title.style.color = 'white'
      header.style.backgroundColor = "#cfdac8"
    }
  }
  const handlePrice = (e) => {
    e.preventDefault()
    setprice(e.target.value)
  }
  console.log(category)
  console.log(note.fileName)
  console.log(note.label)
  return (
    <div className="sidebar">
      <div className="sidebar__new">
        <div id="sidebar__header">
      <h2 id="sidebar__title" onClick={handleAdd}>
        SELL YOUR NOTES
      </h2>
        </div>
      <br />
        <form onSubmit={handleSubmit}>
          {add ? (
            <div className="sidebar__notes">
              <select
                placeholder="Category"
                name="category"
                value={note.category}
                onChange={handleChange}
              >
                <option value="science">CATEGORY</option>
                <option value="science">Science</option>
                <option value="math">Math</option>
                <option value="history">History</option>
                <option value="art">Art</option>
                <option value="finance">Finance</option>
                <option value="economics">Economics</option>
              </select>
              <input
                placeholder="Label"
                name="label"
                value={note.label}
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="$Price"
                name="price"
                value={note.price}
                onChange={handleChange}
              />
                <input
                  placeholder="Content"
                  name="content"
                  value={note.content}
                  onChange={handleChange}
                />
              <Button type="submit" className="sidebarNew__button">
                SUBMIT
              </Button>
            </div>
          ) : null}
        </form>
      </div>
      <br />
      {/* <div>
				</div>
				<div className="sidebar__price">
					<label>Price</label>
					<select name="price" onChange={handlePrice}>
						<option value="science" />
						<option value="high">High to Low</option>
						<option value="low">Low to High</option>
					</select>
				</div>
			</div> */}
    </div>
  )
}

export default SideBar
