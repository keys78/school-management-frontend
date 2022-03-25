import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const PublicNav = () => {
  const history = useHistory();
  return (
    <PublicNavContainer >
      <div className='align-pad'>
        <div className='flex justify-between items-center align-pad'>
          <img className='w-40' src="e-school.png" alt="School Logo" />
          <div className='text-white flex gap-4'>
            <h1>Home</h1>
            <h1>About</h1>
            <h1 className='cursor-pointer' onClick={() => history.push('/login')}>Login</h1>
            <h1 className='cursor-pointer' onClick={() => history.push('/confirm-regno')}>Sign Up</h1>
          </div>
        </div>
      </div>
    </PublicNavContainer>
  )
}

const PublicNavContainer = styled.div`
    width: 100%;
    background: #021532;

    & > div:nth-of-type(1) > div:nth-of-type(1) { padding: 13px 0; }
`
export default PublicNav;