import React from 'react'
import styled from 'styled-components'
import { homeContentData } from '../utils/data'
import CountUp from 'react-countup'


const HomeContent = () => {
    const renderContent = homeContentData.map((val, i) => (
        <ContentSingleBox key={i}>
            <div>
                {val.icon}
            </div>
            <div>
                <h1>{val.title}</h1>
                <h3>{val.text}</h3>
            </div>
        </ContentSingleBox>
    ));
    return (
        <HomeContentWrapper>
            <div className='align-pad'>
                {renderContent}
            </div>
            <div className='align-pad'>
                <CountersBox>
                    <div>
                        <img src="" />
                        <h1><CountUp end={5000} duration={5} />+</h1>

                        <h2>HAPPY STUDENTS</h2>
                    </div>
                    <div>
                        <img src="" />
                        <h1><CountUp end={10000} duration={5} />+</h1>
                        <h2>ALUMNI</h2>
                    </div>
                    <div>
                        <img src="" />
                        <h1>3rd</h1>
                        <h2>MOST EFFICIENT UNIVERSITY</h2>
                    </div>
                    <div>
                        <img src="" />
                        <h1><CountUp end={7} duration={5} /></h1>
                        <h2>WORLD AWARDS</h2>
                    </div>
                </CountersBox>
            </div>
            <div className='align-pad'>
                <h1>We Love To Have You With Us!</h1>
            </div>
        </HomeContentWrapper>
    )
}

const HomeContentWrapper = styled.section`
    & > div:nth-of-type(1) { 
        display: grid; 
        grid-template-columns: repeat(2, 1fr); 
        padding-top: 50px; 
        padding-bottom: 50px; 
        row-gap: 40px;  
        column-gap: 67p;
        
        @media screen and (max-width: 1280px) {
            grid-template-columns: 1fr;
    }
 }
  


    & > div:nth-of-type(2) { text-align: center;  background: #E7F1FF; padding-top: 150px; padding-bottom: 150px;
        & > div > div > h1 { font-size:70px; opacity:0.7;  font-weight: 100; font-family: 'Abril Fatface', cursive;  }
        & > div > div > h2 { font-size:20px; opacity:0.7;  font-weight: 600;  }
    }

    & > div:nth-of-type(3) { text-align: center;  padding-top: 150px; padding-bottom: 150px;
        &  > h1 { font-size: 70px }
    }
`
const ContentSingleBox = styled.div`
    display:grid ;
    grid-template-columns: 10% 90% ;
    align-items:center ;
    
    & > div:nth-of-type(2) > h1 {font-size: 24px; font-weight: 600; }
    @media screen and (max-width: 650px) {
        grid-template-columns: 100%;
    }
`

const CountersBox = styled.div`
    display:grid ;
    grid-template-columns: repeat(4, 1fr) ;

    @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`
export default HomeContent