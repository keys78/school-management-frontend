import React from 'react'
import styled from 'styled-components'

const BtnControls = ({ onClick, text, icon, type, disabled }) => {
    return (
        <ButtonCtrl disabled={disabled} type={type} onClick={onClick} className="space-x-2">
            <span>{icon}</span>
            <span>{text}</span>
        </ButtonCtrl>
    )
}


const ButtonCtrl = styled.button`
    background: -webkit-linear-gradient(to right, #606c88, #3f4c6b); 
    background: linear-gradient(to right, #606c88, #3f4c6b); 
    padding: 5px 17px;
    color:#fff;
    border: 1px solid #b6b6b66e;
    transition:0.4s ;
    border-radius:5px ;
    display:flex ;
    align-items: center;
    justify-content:center ;
    width:100% ;

    & > span:nth-of-type(1) {
        transition: 0.4s ;
    }

    &:hover {
        background: linear-gradient(to right, #2c4683, #262931);
        transition:0.4s ;

        & > span:nth-of-type(1) {
            transform: scale(1.2);
            transition:0.4s ;
        }
    }

`

export default BtnControls;