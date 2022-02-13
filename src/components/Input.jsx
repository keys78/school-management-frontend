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
    padding: 13px 0 14px 32px;
    border: 0.5px solid #423f3f;
    border-radius: 2px;
    width: 100%;
    border: none;
    
    &:focus {
        outline: none;
    }

    @media screen and (max-width: 540px){
        padding: 7px 0 7px 12px;
        font-size: 12px;
    }
`

export default Input
