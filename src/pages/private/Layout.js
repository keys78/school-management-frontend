import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import SideNav from '../../components/SideNav'
import axios from 'axios'

const Layout = ({ children, user }) => {
  const [teachersCount, setTeachersCount] = useState(null);
  const [studentsCount, setStudentsCount] = useState(null)
  useEffect(() => {
    fetchData()
  }, [user]);


  const fetchData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      if (user.role === 'admin') {
        const { data: teacherCount } = await axios.get("http://localhost:4000/private/admin/teachers", config);
        const { data: studentCount } = await axios.get("http://localhost:4000/private/students", config);

        console.log(studentCount, teacherCount)
        setTeachersCount(teacherCount)
        setStudentsCount(studentCount)

      }

    } catch (error) {
      console.log(error)
    }
  };
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