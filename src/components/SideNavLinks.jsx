import React from 'react'
import styled from 'styled-components'
import { navLinks } from '../utils/data'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'


const SideNavLinks = () => {
    const renderNavLinks = navLinks.map((navLink, i) => (
        <SingleNav key={i}
            to={navLink.path}
            exact='true'
        >
            {navLink.title}
            <img src={navLink.icon} alt={navLink.title}/>
        </SingleNav>
    ))
    return (
        <div>
            {renderNavLinks}
        </div>
    )
}

const SingleNav = styled(LinkScroll)`
    color: #ffffff;
    cursor: pointer;
`

export default SideNavLinks