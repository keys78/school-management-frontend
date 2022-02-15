import React from 'react'
import styled from 'styled-components'
import SideNavLinks from './SideNavLinks';

const SideNav = () => {

    return (
        <SideBarWrapper>
           <div>
               LogoHere
           </div>
            <SideNavLinks />
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