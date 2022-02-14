import React from 'react'
import styled from 'styled-components'
import { navLinks } from '../utils/data'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'
import { NavLink as LinkerNav } from 'react-router-dom'


const SideNavLinks = () => {
    const renderNavLinks = navLinks.map((navLink, i) => (
        <SingleNav key={i}
            activeclassname="active"
            to={navLink.path}
            exact='true'
        >
             <img src={navLink.icon} alt={navLink.title}/>
            {navLink.title}
           
        </SingleNav>
    ))
    return (
        <div>
            {renderNavLinks}
        </div>
    )
}

const SingleNav = styled(LinkerNav)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:10px;
    padding: 5px 60px 5px 20px;
    color: #ffffff;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        background: #1a83ff;
        
    }

    
    
`

export default SideNavLinks