import React, { useState } from 'react'
import styled from 'styled-components'
import { navLinks } from '../utils/data'
import { NavLink as LinkerNav } from 'react-router-dom';
import { IconContext, X, Prohibit } from "phosphor-react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AnimatePresence, motion } from 'framer-motion'
import { modalVariants } from '../utils/Animations';


const SideNavLinks = ({ user, isNavOpen, setIsNavOpen }) => {
    const [activeNavLink, setActiveNavLinks] = useState('');
    const [accessDenied, setAccessDenied] = useState(false);
    const emptyDetails = (
        user.address === "" ||
        user.phone === "" ||
        user.dob === "" ||
        user.soo === "" ||
        user.pic === "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    )


    const history = useHistory();
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

    const accessDeniedModal = [
        <AnimatePresence>
            <AccessDeniedModal>
                <motion.div
                    variants={modalVariants}
                    initial="initial"
                    animate="final"
                    exit="exit"
                >
                    <Close>
                        <X size={16} color="#000000c9" weight="bold" onClick={() => setAccessDenied(!accessDenied)} />
                    </Close>
                    <div>
                        <Prohibit size={30} color="#e52e2e" weight="bold" />
                        <h1>Access Denied</h1>
                    </div>
                    <span>Hi {user.firstName}, </span><br /> {`You need to update your profile first.`}
                </motion.div>
            </AccessDeniedModal>
        </AnimatePresence>

    ]


    const navClick = ({ navLink, i }) => {

        if (emptyDetails && navLink.title === 'Students' && user.role === 'teacher') {
            setAccessDenied(!accessDenied)
        }

        setActiveNavLinks(i)
        window.innerWidth < 1280 && setIsNavOpen(!isNavOpen)

        if (navLink.title === 'Logout') {
            localStorage.removeItem("authToken");
            history.push("/login");
        }
    }




    function validateTeacherRouteAccess(navLink) {
        if (emptyDetails && navLink.title === 'Students' && user.role === 'teacher') {
            return '/profile'
        } else {
            return navLink.path
        }
    }

    // const kk = 

    const renderNavLinks = navLinks.map((navLink, i) => (
        navLink.role.includes(user.role)
        &&
        <motion.div key={i}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1, delay: i * 0.2 }}
        >
            <SingleNav
                to={validateTeacherRouteAccess(navLink)}
                onClick={() => navClick({ navLink, i })}
                activeClassName={emptyDetails && user.role === 'teacher' && navLink.path === '/students'  ? '' : 'routeActive'}
              
                

            >
                {altIcon({ navLink, i })}
                {navLink.title}
            </SingleNav>
        </motion.div>

    ))
    return (
        <div>
            {renderNavLinks}
            {accessDenied &&
                accessDeniedModal
            }
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


const AccessDeniedModal = styled.div`
    position: fixed !important;
    top: 0;
    right: 0;
    background: #00000076;
    width: 100%;
    height: 100vh;
    z-index: 9;
    margin:5px ;

    & > div:nth-of-type(1) {
        max-width:100%;
        background: #fff;
        color: #000000;
        border-radius:5px ;
        font-size:15px ;
        padding: 12px 20px 12px 20px;
        line-height:18px ;
        span { color: #000000 !important; font-weight: bold; line-height:30px;}

        & > div { color: #e52e2e; display: flex; align-items:center; justify-content: center; gap:10px; padding:13px 0 ; margin-top:6px ;
            h1 { font-size: 18px; font-weight: bold;}
        }
    }
    
`

const Close = styled.div`
   position:absolute ;
   top:-7px;
   right:5px; 
   cursor: pointer;
`
export default SideNavLinks