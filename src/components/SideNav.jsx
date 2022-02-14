import React from 'react'
import styled from 'styled-components'
import SideNavLinks from './SideNavLinks';

const SideNav = () => {

    return (
        <SideBarWrapper>
            LogoHere
            <SideNavLinks />
        </SideBarWrapper>
    )
};

const SideBarWrapper = styled.section`
    background-color: #060b26;
    position: fixed;
    height: 100vh;
    color: #fff;
`

export default SideNav;