import React from 'react'

const CustomHamburger = ({isActiveBurger, setIsActiveBurger}) => {

    return (
        <div class="three col">
            <div onClick={() => setIsActiveBurger(!isActiveBurger)} class={`${isActiveBurger ? 'hamburger is-active' : 'hamburger'}`} id="hamburger-12">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>

    )
}

export default CustomHamburger;