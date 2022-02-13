import React from 'react'
import styled from 'styled-components'

const Button = ({text}) => {
  return (
    // <ButtonWrapper>{text}</ButtonWrapper>
    <button>{text}</button>
  )
}

// const ButtonWrapper = styled`
//     background-color: rgb(0,66,130);
//     color: #fff;
// `

export default Button