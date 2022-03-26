import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'
import PublicNav from '../components/PublicNav'


const Home = () => {
  return (
    <div>
        <PublicNav />
        <Hero />
        <HomeContent />
        <Footer />
        
    </div>
  )
}

export default Home