import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import SearchBar from './SearchBar';


const DataTable = ({ tableHeading, tableData, searchTerm, setSearchTerm, setAllStuds, allStuds }) => {
    useEffect(() => {
        if (searchTerm !== '') {
            const searchFilter = tableData && tableData.filter((user) =>
                user.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                user.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                )
            setAllStuds(searchFilter)
        } 
        else {
            setAllStuds(allStuds)
        }
    }, [searchTerm])



    // useEffect(() => {
    //     const searchFilter = data?.data.filter((user) =>
    //         user.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    //         user.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    //         user.email.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    //         user.lastLogin.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    //     setListItem(searchFilter)
    // }, [data, searchTerm])


    const history = useHistory();

    const moreDetails = (value) => {
        console.log(value._id)
        history.push(`students/student/${value._id}`)
    }


    const renderTableHeading = tableHeading.map((table, i) => (
        <TableHeads key={i}>{table.title}</TableHeads>
    ))

    const renderAllStudents = tableData && tableData.map((val, i) => (
        <CustomTableRow key={i}>
            <TableData> {1 + i} </TableData>
            <TableData> {val.firstName} </TableData>
            <TableData> {val.lastName}  </TableData>
            <TableData> {val.email}  </TableData>
            <TableData><button onClick={() => moreDetails(val)}> more </button></TableData>
        </CustomTableRow>

    ))

    return (
        <TableWrapper>
            <div className='flex justify-between items-center p-2'>
                <div className='flex'>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    <h1>Students</h1>
                </div>
                Sort
            </div>
            <CustomTable>
                <CustomTableHead >
                    <tr>
                    {renderTableHeading}
                    </tr>
                   
                </CustomTableHead>
                <tbody className='w-full'>
                    {renderAllStudents}
                </tbody>
            </CustomTable>
        </TableWrapper>
    )
}


const TableWrapper = styled.section`
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #fff;
    padding-bottom: 40px;
`
const CustomTable = styled.table`
    width: 100%;
`
const CustomTableHead = styled.thead`
    background: #3C3D3E;
`

const CustomTableRow = styled.tr`
    width: 100%;
    border-bottom: 0.5px solid #95999B;
`
const TableHeads = styled.th`
    text-align: left;
    padding:8px 12px;
    font-size: 18px;
    color:#fff;
`
const TableData = styled.td`
    padding:8px 12px;
    font-size: 15px;
`


export default DataTable;