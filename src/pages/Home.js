import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PublicNav from '../components/PublicNav'


const Home = () => {
  return (
    <div>
        <PublicNav />
        <Hero />
        <Footer />
        
    </div>
  )
}

export default Home