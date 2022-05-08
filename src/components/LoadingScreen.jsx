import React from 'react';
import styled, { keyframes } from 'styled-components'

function LoadingScreen() {
  return (
    <Loading>
      <Spinner>
        <img src="e-school.png" alt="e-school logo" />
      </Spinner>
    </Loading>
  )
}

const Loading = styled.section`
  background: #04131D;
  height: 100vh; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;

  & img {   z-index: 99999999999999;  position: absolute;
    top: 49px;
    left: 2px;
    width: 200px;; max-width:-1% !important;}
`

const spin = (props) => keyframes`
 to {
   transform: rotate(360deg) ;
 }
`;

const Spinner = styled.div`
  position:relative ; height:190px ; width:190px ; border-radius:50% ;

  ::before, ::after {
    content:"" ;
    position:absolute ;
    border-radius:inherit ;
  }

  ::before  { width: 100%; height: 100%; background-image: linear-gradient(0deg, #ff00CC 0%, #333399 100%); animation: ${spin} .5s infinite linear}
  ::after  { width: 91%; height: 91%; background-color: #151515; top:50%; left:50%; transform: translate(-50%, -50%); }

`

export default LoadingScreen;