import React from 'react'
import styled from 'styled-components'

const Button = ({ onClick, text, flexUp, width, padding, margin, color}) => {
    return (
        <ButtonWrapper onClick={onClick} className={`glow-on-hover ${flexUp} ${ width} ${margin} ${padding} ${color}`}>
            <span>{text}</span>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button`
  width: 100%;
  background: #04131D;
  color: #fff;
  border-radius: 6px;
`

export default Button
