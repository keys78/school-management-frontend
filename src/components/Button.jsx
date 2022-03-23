import React from 'react'
import styled from 'styled-components'

const Button = ({ onClick, text, flexUp, width, padding, margin, color, background, reset, type }) => {
  return (
    <ButtonWrapper
    type={type}
      reset={reset}
      onClick={onClick}
      className={`glow-on-hover ${flexUp} ${background} ${width} ${margin} ${padding} ${color}`}>
      {text}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  /* width: 100%; */
  font-size: 16px;
  border-radius: 6px;
  background:${({ reset }) => (!reset ? '#04131D' : 'red')};
  color:${({ reset }) => (!reset ? '' : '#fff')};
`


export default Button
