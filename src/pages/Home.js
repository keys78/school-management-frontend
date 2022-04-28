import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'
import PublicNav from '../components/PublicNav'
import styled from 'styled-components'


const Home = () => {
  return (
    <BodyContainer>
        <PublicNav />
        <Hero />
        <HomeContent />
        <Footer />
        
    </BodyContainer>
  )
}

const BodyContainer = styled.div`
  max-width:1600px;
  margin:0 auto ;
`

export default Home