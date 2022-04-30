import React from 'react'
import styled from 'styled-components'
import bell from '../assets/images/ic-notification.png'
// import { Hamburger, List } from 'phosphor-react'

const Navbar = ({ user, setIsNavOpen, isNavOpen }) => {


  return (
    <div className='navbar-adjust'>
      <NavbarWrapper>
        <div>
          {/* <HamburgerToggle>
            <List size={30} onClick={() => setIsNavOpen(!isNavOpen)} color="#696D8C" weight="bold" />
          </HamburgerToggle> */}
          <HamburgerToggle onClick={() => setIsNavOpen(!isNavOpen)} >
            Close
          </HamburgerToggle>
          <RoleTag>{user.role === 'teacher' ? 'lecturer' : user.role}</RoleTag>
          <div className='flex items-center gap-5'>
            <Notif>
              <span>0</span>
              <img src={bell} alt="notif-icon" />
            </Notif>
            <img className='rounded-full w-10' src={user.profileImg} alt="profile-icon" />
            <Initials>
              {/* {user ? user.firstName.charAt() : "-"}
              {user ? user.lastName.charAt() : "-"} */}
              EO
            </Initials>
          </div>
        </div>
      </NavbarWrapper>
      </div>
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
      max-width:1250px ;
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

const HamburgerToggle = styled.div`
    display:none ;
    position: relative ;
    cursor: pointer;

    
    @media screen and (max-width: 1280px){
        display: block;
    }
`


export default Navbar