import React, { useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import SideNav from '../../components/SideNav'

const Layout = ({ children, user}) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

    const handleResize = () => {
      window.innerWidth < 1280 ? setIsNavOpen(false) : setIsNavOpen(true)
    }
  
    useEffect(() => {
      window.innerWidth > 1280 && setIsNavOpen(true)
      window.addEventListener("resize", handleResize)
    })
    
  return (
    <>
      {user ? (
        <div>
          <SideNav user={user} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Navbar user={user} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          {children}
        </div>
      ) : <div>Loading ....</div>
      }
    </>
  )
}
export default Layout;