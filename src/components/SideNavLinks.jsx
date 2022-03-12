import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { navLinks } from '../utils/data'
import { NavLink as LinkerNav } from 'react-router-dom';


const SideNavLinks = ({ user }) => {
    const renderNavLinks = navLinks.map((navLink, i) => (
        navLink.role.includes(user.role) && <SingleNav key={i}
            activeclassname="active"
            to={navLink.path}
        >
            <img src={navLink.icon} alt={navLink.title} />
            {navLink.title}
        </SingleNav>
    ))
    return (
        <div>
            {renderNavLinks}
        </div>
    )
};

const SingleNav = styled(LinkerNav)`
    display: grid;
    grid-template-columns: 25% 75%;
    align-items: center;
    gap:10px;
    padding: 5px 60px 5px 20px;
    color: #ffffff;
    border-radius: 5px;
    /* border-top-left-radius:5px; */
    /* border-bottom-left-radius:5px; */
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        background: #1a83ff;
        /* color: var(--testio);
  background: #fff; */
        
    }

    
    
`

export default SideNavLinks