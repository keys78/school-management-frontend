import React, { useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'
import PublicNav from '../components/PublicNav'
import styled from 'styled-components'
import LoadingScreen from '../components/LoadingScreen'


const Home = () => {
  const [isPageLoader, setIspageLoader] = useState(true)

  const pageLoader = () => {
    setTimeout(() => {
      setIspageLoader(!isPageLoader)
    }, 2000)
  }
  useEffect(() => {
    pageLoader();
  }, [])


  return (
    <>
      {isPageLoader ?
        <LoadingScreen /> : (
          <BodyContainer>
            <PublicNav />
            <Hero />
            <HomeContent />
            <Footer />

          </BodyContainer>
        )}
    </>
  )
}

const BodyContainer = styled.div`
  max-width:1600px;
  margin:0 auto ;
`

export default Home