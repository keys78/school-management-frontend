import React from 'react'
import Navbar from '../../components/Navbar'
import SideNav from '../../components/SideNav'

const Layout = ({ children }) => {
  return (
    <div>
        <SideNav /> 
        <Navbar /> 
        {children}
    </div>
  )
}

export default Layout