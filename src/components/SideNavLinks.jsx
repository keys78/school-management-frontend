import React, { useState } from 'react'
import styled from 'styled-components'
import { navLinks } from '../utils/data'
import { NavLink as LinkerNav } from 'react-router-dom';
import { IconContext } from "phosphor-react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { motion } from 'framer-motion'


const SideNavLinks = ({ user, isNavOpen, setIsNavOpen }) => {
    const history = useHistory();
    const [activeNavLink, setActiveNavLinks] = useState(0);
    const altIcon = ({ navLink, i }) => (
        <IconContext.Provider
            value={{
                color: (i === activeNavLink ? '#696D8C' : '#6aeef5'),
                size: 20, weight: "bold",
            }}
        >
            {<span>{navLink.icon}</span>}
        </IconContext.Provider>
    )

    const navClick = ({ navLink, i }) => {
        setActiveNavLinks(i)
        window.innerWidth < 1280 && setIsNavOpen(!isNavOpen)

        if (navLink.title === 'Logout') {
            localStorage.removeItem("authToken");
            history.push("/login");
        }
    }


    const renderNavLinks = navLinks.map((navLink, i) => (
        navLink.role.includes(user.role)
        &&
        <motion.div key={i}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: i * 0.3 }}
        >
            <SingleNav
                onClick={() => navClick({ navLink, i })}
                activeclassname="active"
                to={navLink.path}
            >
                {altIcon({ navLink, i })}
                {navLink.title}
            </SingleNav>
        </motion.div>

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
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;

    @media screen and (max-width: 1280px) {
        color:#696D8C;
    }
  
`
export default SideNavLinks