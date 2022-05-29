import React from 'react'
import styled from 'styled-components'
import bell from '../assets/images/ic-notification.png'
import { useHistory } from 'react-router-dom'
import CustomHamburger from './CustomHamburger'


const Navbar = ({ user, setIsNavOpen, isNavOpen }) => {
  const history = useHistory();

  return (
    <NavbarWrapper>
      <div>
        <NavbarRedo>
          <img onClick={() => history.push('/')} className='sm:w-40 w-28 cursor-pointer' src={'e-school.png'} alt="logo" />
          <RoleTag className="private-two">{user.role === 'teacher' ? 'lecturer' : user.role}</RoleTag>
          <CustomHamburger isActiveBurger={isNavOpen} setIsActiveBurger={setIsNavOpen} />
        </NavbarRedo>

        <RoleTag className="private">{user.role === 'teacher' ? 'lecturer' : user.role}</RoleTag>
        <div className='flex items-center gap-5 private'>
          <Notif>
            <span>0</span>
            <img src={bell} alt="notif-icon" />
          </Notif>
          <img className='rounded-full w-10 h-10' src={user.pic} alt="profile-icon" />
          <Initials>
            {user.firstName && user.firstName.charAt()}
            {user.lastName && user.lastName.charAt()}
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

    @media screen and (max-width: 1280px){
      padding-left: 0;
      display:block ;
      background:#04131D ;
      box-shadow: none;
    }

    & > div {
      width: 90%;
      margin: 0 auto;
      padding:20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width:1250px ;

      @media screen and (max-width: 1280px) {
       display: block;
      }

      @media screen and (max-width: 767px){
      width:96% ;
     }
      @media screen and (max-width: 480px){
        padding:9px 0;
     }
    }

`

const NavbarRedo = styled.div`
  display:none ;
  align-items: center;
  justify-content: space-between;
  width:100% ;

  @media screen and (max-width: 1280px) {
    display: flex;
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
  text-align:center ;
  min-width:34px ;
  border-radius: 5px;
  text-transform: uppercase ;
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
    color: #fff;
    position: relative ;
    cursor: pointer;

    
    @media screen and (max-width: 1280px){
        display: block;
    }
`


export default Navbar