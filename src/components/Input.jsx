import React from 'react'
import styled from 'styled-components'


const Input = ({name, value, onChange, placeholder, label, type, required}) => {
    return (
        <>
            <label className="block">{label}</label>
            <InputBox
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                required={required}
            />
        </>
    )
}

const InputBox = styled.input`
    color: #768192;
    padding: 6px 7px;
    border-radius: 5px;
    width: 100%;
    border: none;
    font-family: 'Statoshi-regular';
    
    &:focus {
        outline: none;
    }

    @media screen and (max-width: 540px){
        padding: 7px 0 7px 12px;
        font-size: 12px;
    }
`

export default Input
