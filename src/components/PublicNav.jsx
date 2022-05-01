import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import CustomHamburger from './CustomHamburger'

const PublicNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const history = useHistory();
  return (
    <>
      <PublicNavContainer >
        <div className='align-pad'>
          <div className='flex justify-between items-center'>
            <img className='sm:w-40 w-28' src="e-school.png" alt="School Logo" />
            <NavItems>
              <h1>Home</h1>
              <h1>About</h1>
              <h1 className='cursor-pointer' onClick={() => history.push('/login')}>Login</h1>
              <h1 className='cursor-pointer' onClick={() => history.push('/confirm-regno')}>Sign Up</h1>
            </NavItems>
            <Hamburger>
              <CustomHamburger isActiveBurger={isMobileNavOpen} setIsActiveBurger={setIsMobileNavOpen} />
            </Hamburger>
          </div>
        </div>
      </PublicNavContainer>
     {isMobileNavOpen && 
     <MobileNav>
        <h1>Home</h1>
        <h1>About</h1>
        <h1 className='cursor-pointer' onClick={() => history.push('/login')}>Login</h1>
        <h1 className='cursor-pointer' onClick={() => history.push('/confirm-regno')}>Sign Up</h1>
      </MobileNav>
     }
    </>
  )
}

const PublicNavContainer = styled.div`
  width: 100%;
  background: #021532;
  position: sticky;
  top:0;
  left:0;
  z-index:99 ;
  & > div:nth-of-type(1) > div:nth-of-type(1) { padding: 13px 0; }
`

const NavItems = styled.div`
  display:flex ;
  align-items:center ;
  justify-content:space-between ;
  gap:10px;
  color: #fff;

  @media screen and (max-width: 767px) {
  display: none !important
}

`

const MobileNav = styled.div`
  display:none ;
  background: #021532;
  text-align:center ;
  color: #fff;
  padding:20px 0;
  position:sticky ;
  top:70px;
  z-index:99 ;
  @media screen and (max-width: 767px) {
    display: block ;
  }
`

const Hamburger = styled.div`
    display:none ;
    @media screen and (max-width: 767px) {
    display: block ;
  }
`


export default PublicNav;