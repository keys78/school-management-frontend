import React from 'react'
import { Link } from 'react-router-dom'
import PublicNav from '../components/PublicNav'


const Home = () => {
  return (
    <div>
        <PublicNav />
        Home
        <Link to="/login">Login</Link>
        <Link to="/confirm-regno">Sign Up</Link>
    </div>
  )
}

export default Home