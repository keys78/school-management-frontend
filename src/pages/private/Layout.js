import React from 'react'
import Navbar from '../../components/Navbar'
import SideNav from '../../components/SideNav'

const Layout = ({ children, user }) => {
  return (
    <>
      {user ? (
        <div>
          <SideNav user={user} />
          <Navbar user={user} />
          {children}
        </div>
      ) : <div>Loading ....</div>
      }
    </>
  )
  }
  export default Layout;