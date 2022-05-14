import React from 'react'
import styled from 'styled-components'
import { CaretDoubleLeft, CaretDoubleRight } from 'phosphor-react'

const Pagination = ({ usersPerPage, totalUsers, first, last, previousPage, nextPage}) => {

    return (
        <PaginationCont>
            <div className='flex gap-12 relative'>
                <div className='flex items-center gap-3 relative sm:space-x-4 soace-x-2'>
                    <p>Rows per page : {totalUsers < 10 ? totalUsers : usersPerPage}</p>

                    <div>{first + 1} - {last } of {totalUsers} </div>
                    <div className='flex gap-10 items-center' >
                        <CaretDoubleLeft className='cursor-pointer' onClick={previousPage} size={20} color="#414a55" />
                        <CaretDoubleRight className='cursor-pointer' onClick={nextPage} size={20} color="#414a55" />
                    </div>
                </div>
            </div>
        </PaginationCont>
    )
}

const PaginationCont = styled.div`
    width: 100%;
    text-align: right;
    padding:15px 18px 15px 0;
    background: #f4f2ff9c;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-weight: 600;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 0.05em;
    color: #6E6893;

    @media screen and (max-width: 600px) {font-size: 12px;}
`


export default Pagination

