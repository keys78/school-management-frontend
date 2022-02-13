import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
            <Navbar />
        Home
        <Link to="/login">Login</Link>
        <Link to="/confirm-regno">Sign Up</Link>
    </div>
  )
}

export default Home