import React from 'react'
import styled from 'styled-components'
import SideNavLinks from './SideNavLinks';
import bell from '../assets/images/ic-notification.png'
import { AnimatePresence, motion } from 'framer-motion'
import { modalVariants } from '../utils/Animations';

const SideNav = ({ user, isNavOpen, setIsNavOpen }) => {

    return (
        <>
            <AnimatePresence>
                {isNavOpen &&
                    <SideBarWrapper
                        variants={modalVariants}
                        initial="initial"
                        animate="final"
                        exit="exit"
                    >
                        <div>
                            <div>
                                <h1>e-school</h1>
                                <h6>{user.email}</h6>
                            </div>
                            <div className='absolute top-4 right-4'>
                                <Notif onClick={() => alert('You have no new notifications')}>
                                    <span>0</span>
                                    <img src={bell} alt="notif-icon" />
                                </Notif>
                            </div>
                        </div>
                        <div className='mb-24'>
                            <img className='w-40 private' src="e-school.png" alt="School Logo" />
                        </div>
                        <SideNavLinks user={user} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                    </SideBarWrapper>
                }
            </AnimatePresence>
        </>
    )
};

const SideBarWrapper = styled(motion.section)`
    background: #04131D;
    z-index: 2;
    position: fixed;
    height: 100vh;
    color: #fff;
    padding: 25px 15px 25px 45px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    
    @media screen and (max-width: 1280px) {
        background:#fff; ;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    @media screen and (max-width: 767px) {
        padding: 25px 15px 25px 15px;
    }

    & > div:nth-of-type(1) {
        position:relative ;
        padding:12px 47px 11px 15px; 
        color:#373737b1;
        border-radius:7px;
        border:1px solid #74747461;
        display:none ;

        @media screen and (max-width: 1280px) {
        display:block ;
    }
    }
    & > div:nth-of-type(2) {
        margin-bottom: 70px;
        @media screen and (max-width: 1280px) {
        margin-bottom:20px ;
        }
    }

`
const Notif = styled.div`
  position: relative;
  cursor: pointer;

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


export default SideNav;