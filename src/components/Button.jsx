import React from 'react'
import styled from 'styled-components'

const Button = ({text, type}) => {
  return (
    // <ButtonWrapper>{text}</ButtonWrapper>
    <button type={type}>{text}</button>
  )
}

// const ButtonWrapper = styled`
//     background-color: rgb(0,66,130);
//     color: #fff;
// `

export default Button