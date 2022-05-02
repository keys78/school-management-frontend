import React from 'react'

const CustomHamburger = ({isActiveBurger, setIsActiveBurger}) => {

    return (
        <div className="three col">
            <div onClick={() => setIsActiveBurger(!isActiveBurger)} className={`${isActiveBurger ? 'hamburger is-active' : 'hamburger'}`} id="hamburger-12">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>

    )
}

export default CustomHamburger;