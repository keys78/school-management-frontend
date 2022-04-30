import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import SideNavLinks from './SideNavLinks';

const SideNav = ({ user, isNavOpen }) => {
    const history = useHistory()

    const logoutUser = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    }


    return (
        <>
            {isNavOpen &&
                <SideBarWrapper>
                    <div className='mb-24'>
                        <img className='w-40 private' src="e-school.png" alt="School Logo" />
                    </div>
                    <SideNavLinks user={user} />
                </SideBarWrapper>
            }
        </>
    )
};

const SideBarWrapper = styled.section`
    background: #04131D;
    z-index: 2;
    position: fixed;
    height: 100vh;
    color: #fff;
    padding: 25px 15px 25px 60px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    
    @media screen and (max-width: 1280px) {
        background:#fff; ;
    }
    @media screen and (max-width: 767px) {
        padding: 25px 15px 25px 15px;
    }

    & > div {
        margin-bottom: 70px;
    }

`

export default SideNav;