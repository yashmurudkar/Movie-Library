import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar({ setSearch, setSelectedMovie }) {
  const [message, setMessage] = useState("")

  const handleChange = (event) => {
    setSelectedMovie("")
    setMessage(event.target.value)
  }
  const handleRefresh = () =>{
    setSearch("")
    setMessage("")
    setSelectedMovie("")
  }

  useEffect(() => {
    setSearch(message)
    // eslint-disable-next-line
  }, [message])

  return (
    <div className='Navbar'>
      <div className='title' onClick={handleRefresh}>
        <img src="/movie-icon.png" alt="" /> Movie Library
      </div>
      <input type="text" placeholder='Search Movies, Series here' value={message} onChange={handleChange}
      />
    </div>
  )
}

export default Navbar
