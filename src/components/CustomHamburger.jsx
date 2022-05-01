import React, { useState } from 'react'

const CustomHamburger = ({isActiveBurger, setIsActiveBurger}) => {
    // const [isActiveBurger, setIsActiveBurger] = useState(false)

    return (
        <div class="three col">
            <div onClick={() => setIsActiveBurger(!isActiveBurger)} class={`${isActiveBurger ? 'hamburger is-active' : 'hamburger'}`} id="hamburger-12">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>

    )
    // return (
    //     <div class="three col">
    //         <div onClick={() => setIsNavOpen(!isNavOpen)} class={`${isNavOpen ? 'hamburger is-active' : 'hamburger'}`} id="hamburger-12">
    //             <span class="line"></span>
    //             <span class="line"></span>
    //             <span class="line"></span>
    //         </div>
    //     </div>

    // )
}

export default CustomHamburger;