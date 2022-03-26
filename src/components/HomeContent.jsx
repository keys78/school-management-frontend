import React from 'react'
import styled from 'styled-components'

const HomeContent = () => {
    return (
        <HomeContentWrapper>
            <div className='align-pad'>
                <div>
                    <h1>Our Culture</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident quaerat quae tempore quibusdam repudiandae illo, aliquid animi consectetur porro reiciendis, fuga mollitia facere cupiditate sit consequuntur voluptatibus voluptates a totam? Quod reiciendis dolores eaque adipisci sunt quam debitis aperiam, modi a sit doloremque omnis numquam facere, praesentium, officiis expedita.</h3>
                </div>
                <div>
                    <h1>Our History</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident quaerat quae tempore quibusdam repudiandae illo, aliquid animi consectetur porro reiciendis, fuga mollitia facere cupiditate sit consequuntur voluptatibus voluptates a totam? Quod reiciendis dolores eaque adipisci sunt quam debitis aperiam, modi a sit doloremque omnis numquam facere, praesentium, officiis expedita.</h3>
                </div>
                <div>
                    <h1>Foresight</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident quaerat quae tempore quibusdam repudiandae illo, aliquid animi consectetur porro reiciendis, fuga mollitia facere cupiditate sit consequuntur voluptatibus voluptates a totam? Quod reiciendis dolores eaque adipisci sunt quam debitis aperiam, modi a sit doloremque omnis numquam facere, praesentium, officiis expedita.</h3>
                </div>
                <div>
                    <h1>Our Core Vaalues</h1>
                    <ul>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                </div>
            </div>
            <div className='align-pad'>
                <div className='flex items=center justify-between'>
                    <div>
                        <img src="" />
                        <h1>5,000 +</h1>
                        <h2>HAPPY STUDENTS</h2>
                    </div>
                    <div>
                        <img src="" />
                        <h1>10,000 +</h1>
                        <h2>ALUMNI</h2>
                    </div>
                    <div>
                        <img src="" />
                        <h1>3rd</h1>
                        <h2>MOST EFFICIENT UNIVERSITY</h2>
                    </div>
                    <div>
                        <img src="" />
                        <h1>7</h1>
                        <h2>WORLD AWARDS</h2>
                    </div>
                </div>
            </div>
            <div className='align-pad'>
                <h1>We Love To Have You With Us!</h1>
            </div>
        </HomeContentWrapper>
    )
}

const HomeContentWrapper = styled.section`
    & > div:nth-of-type(1) { display: grid; grid-template-columns: repeat(2, 1fr); padding-top: 50px; padding-bottom: 50px; row-gap: 20px;  column-gap: 20px;
        & > div > h1 { font-size: 24px; font-weight: 500;  }
    }


    & > div:nth-of-type(2) { text-align: center;  background: #E7F1FF; padding-top: 150px; padding-bottom: 150px;
        & > div > div > h1 { font-size:80px;     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif };
        font-weight: 500; 
    }


    & > div:nth-of-type(3) { text-align: center;  padding-top: 150px; padding-bottom: 150px;
        &  > h1 { font-size: 70px }
    }
`

export default HomeContent