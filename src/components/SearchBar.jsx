import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import {MagnifyingGlass } from "phosphor-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {

    return (
        <SearchContainer>
            <Input
                placeholder={'Search user by name or email'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlass size={20} color="#08546d" />
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    padding: 0 13px 0 0;
    border: 0.5px solid #BDBDBD;
    border-radius: 5px;
    font-family: circular-std-light;
    display: flex;
    gap:0 6px;
    align-items: center;
    justify-content: space-between;
    width: 319px;

    @media screen and (max-width: 1024px){
       width: 100%;
    }

    @media screen and (max-width: 640px){
    }

  

`

export default SearchBar
