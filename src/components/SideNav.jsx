import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import SideNavLinks from './SideNavLinks';

const SideNav = ({ user }) => {
    const history =  useHistory()

    const logoutUser = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    }
    return (
        <SideBarWrapper>
           <div>
               LogoHere
           </div>
            <SideNavLinks user={user}/>
            <button onClick={logoutUser}>Logout</button>
        </SideBarWrapper>
    )
};

const SideBarWrapper = styled.section`
    background-color: #060b26;
    z-index: 2;
    position: fixed;
    height: 100vh;
    color: #fff;
    padding: 25px 15px 25px 60px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    & > div {
        margin-bottom: 70px;
    }
`

export default SideNav;