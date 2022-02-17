import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/usersSlice';
import bell from '../assets/images/ic-notification.png'

const Navbar = () => {
  const [user, setUser] = useState({})


  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("http://localhost:4000/private/user", config);
        setUser(data);
        console.log(data)
      } catch (error) {
        localStorage.removeItem("authToken");
      }
    };

    fetchPrivateDate();
  }, []);

  return (
    <NavbarWrapper>
      <div>
        <RoleTag>{user.role}</RoleTag>
        <div className='flex items-center gap-5'>
          <Notif>
            <span>0</span>
            <img src={bell} alt="notif-icon" />
          </Notif>
          <img className='rounded-full w-10' src={user.profileImg} alt="profile-icon" />
          <Initials>
            {/* {user && user.firstName.charAt()}
            {user && user.lastName.charAt()} */}
            EO
          </Initials>
        </div>
      </div>

    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.section`
    box-shadow: 0px 1px 3px var(--greyLight-2);
    background:#ffffff;
    position: fixed;
    top:0;
    width: 100%;
    padding-left: 210px;
    right: 0%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      width: 90%;
      margin: 0 auto;
      padding:20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* border: 1px solid black; */
    }

`

const Notif = styled.div`
  position: relative;

  & > span {
    position: absolute;
    top:-12px;
    left:-7px;
    color: #fff;
    background-color: #9d1515;
    padding:0px 5px;
    font-size: 12px;
    border-radius: 100%;
  }
`

const Initials = styled.div`
  background: #c0bfbf;
  color: #fff;
  font-size: 16px;
  font-weight: 500p;
  padding: 5px;
  border-radius: 5px;
`
const RoleTag = styled.div`
  padding:4px 10px;
  font-size: 14px;
  border-radius: 10px;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #ffffff;
`

export default Navbar