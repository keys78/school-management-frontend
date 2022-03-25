import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PublicNav from '../components/PublicNav'


const Home = () => {
  return (
    <div>
        <PublicNav />
        <Hero />
        
    </div>
  )
}

export default Home