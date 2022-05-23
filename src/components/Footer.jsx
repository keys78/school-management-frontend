import React from 'react'
import styled from 'styled-components'
import { TwitterLogo, GithubLogo, LinkedinLogo } from 'phosphor-react'
import { useHistory } from 'react-router-dom'

const Footer = () => {
    const history = useHistory();
    return (
        <FooterContainer>
            <FooterWrapper className='align-pad'>
                <div className='flex items-center gap-8 pt-8 pb-4'>
                    <h1>CONNECT WITH US</h1>
                    <div className='flex gap-6 opactity-40' >
                        <a href='https://twitter.com/Emmy31087589' target={'_blank'} referrerPolicy={'no-referrer'}><TwitterLogo size={22} color="#ededed" weight="bold" /></a>
                        <a href='https://github.com/Em-codes/school-management-frontend' target={'_blank'} referrerPolicy={'no-referrer'}><GithubLogo size={22} color="#ededed" weight="bold" /></a>
                        <a href='https://www.linkedin.com/in/tochi-emma-904b71220/' target={'_blank'} referrerPolicy={'no-referrer'}><LinkedinLogo size={22} color="#ededed" weight="bold" /></a>
                    </div>
                </div>
                <div className='flex flex-wrap md:gap-20 gap-8 border-t border-b border-gray-200 py-4'>
                    <div>
                        <h1>INFORMATION ABOUT</h1>
                        <h4> E-School</h4>
                        <h4> Strategic plan</h4>
                        <h4> E-school's research</h4>
                        <h4> Course fees and funding</h4>
                        <h4> Libraries</h4>
                        <h4> Museums and collections</h4>
                        <h4> Open days</h4>
                        <h4> E-school glossary</h4>
                    </div>
                    <div>
                        <h1>INFORMATION FOR</h1>
                        <h4>Prospective undergraduates</h4>
                        <h4> Prospective graduate students</h4>
                        <h4> Prospective Continuing Education students</h4>
                        <h4> Prospective online/distance learning students</h4>
                        <h4> Current E-School students</h4>
                        <h4> Current E-school staff</h4>
                    </div>
                    <div>
                        <h1>QUICK LINKS</h1>
                        <h4> Any questions?</h4>
                        <h4> Jobs and vacancies</h4>
                        <h4> Term dates</h4>
                        <h4> Map</h4>
                        <h4> Chimp email</h4>
                        <h4> Giving to E-school</h4>
                        <h4> E-school University Images</h4>
                    </div>
                </div>
                <div className="py-4 text-gray-300">
                   Copyright &copy;<span> {new Date().getFullYear()} </span> E-School® &nbsp; All rights reserved.
                </div>
            </FooterWrapper>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background: #002147;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    & h1 { opacity: 0.7; font-size: 20px; line-height: 40px;}
    & h4 { opacity: 0.4; line-height: 35px; cursor: pointer; transition: 0.4s; font-size: 14px;
        &:hover {
            opacity: 1; transition: 0.4s;
        }
    }
`
const FooterWrapper = styled.div`
    
`

export default Footer;