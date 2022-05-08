import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import SearchBar from './SearchBar';
import axios from 'axios';
import SortByOrder from './SortByOrder';
import TextField from './TextField';
import { Formik, Form } from 'formik';
import { validateScore } from '../utils/validateForm';
import { DotsThreeOutlineVertical } from 'phosphor-react'
import Scorebtn from './Scorebtn';
import { CSVLink } from 'react-csv'


export const DataTable = ({ user, tableHeading, tableData, searchTerm, setSearchTerm, setData, url, tableTitle, data }) => {
    const csvLink = { data: tableData, filename: "e-school.file.csv" }
    const history = useHistory();
    const fetchAllStudents = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {
            const { data } = await axios.get(url, config);
            if (user.role === 'teacher') {
                const studentsToTeacher = data.filter(val => val.department === user.department)
                setData(studentsToTeacher)
            } else {
                setData(data)
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (searchTerm !== '') {
            const searchFilter = tableData && tableData.filter((user) =>
                user.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                user.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
            setData(searchFilter)
        } else {

            fetchAllStudents();
        }
    }, [searchTerm])


    const moreDetails = (value) => {
        value.role === 'student' && history.push(`students/student/${value._id}`)
        value.role === 'teacher' && history.push(`lecturers/lecturer/${value._id}`)
    }


    const renderTableHeading = tableHeading.map((table, i) => (
        <TableHeads key={i}>{table.title}</TableHeads>
    ))

    const renderAllStudents = tableData && tableData.map((val, i) => (
        <CustomTableRow onClick={() => moreDetails(val)} key={i}>
            <TableData> {1 + i} </TableData>
            <TableData> {val.firstName} </TableData>
            <TableData> {val.lastName}  </TableData>
            <TableData> {val.gender}  </TableData>
            <TableData> {val.email}  </TableData>
            <TableData><button> <DotsThreeOutlineVertical size={20} color="#494949dc" weight="bold" /> </button></TableData>
        </CustomTableRow>

    ))



    return (
        <TableWrapper>
            <TableTitle className='' >{tableTitle}</TableTitle>
            <div className='flex justify-between items-center sm:p-2 p-0 py-2'>
                <div className='flex'>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                </div>
                <div className='flex sm:space-x-4 space-x-2'>
                    <button className='export-csv'><CSVLink {...csvLink}><span className='hide-export'>Export to </span>CSV {`(${tableData && tableData.length})`}</CSVLink></button>
                    <SortByOrder tableData={tableData} setData={setData} url={url} />
                </div>

            </div>
            <TableAdjustMobile>
                <CustomTable>
                    <CustomTableHead >
                        <tr>
                            {renderTableHeading}
                        </tr>
                    </CustomTableHead>
                    <tbody className='w-full'>
                        {tableData.length === 0 ? <span className='text-center  pl-1'>No data available</span> : renderAllStudents}
                    </tbody>
                </CustomTable>
            </TableAdjustMobile>
        </TableWrapper>
    )
}




export const DataTableAcademics = ({ fetchAllStudents, tableData, tableHeading, showBtn }) => {
    const [status, setStatus] = useState(false)
    const renderTableHeading = tableHeading.map((table, i) => (
        <TableHeads key={i}>{table.title}</TableHeads>
    ))

    const renderAllScores = tableData && tableData.courses.map((course, i) => (
        <CustomTableRow key={i} className='no-pointer'>
            <TableData> {1 + i} </TableData>
            <TableData>{course.code}</TableData>
            <TableData className="title-field">{course.title}</TableData>
            <TableData>
                <Formik
                    initialValues={{
                        score: course.score
                    }}
                    validationSchema={validateScore}
                    onSubmit={async (values) => {

                        const config = {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                            },
                        };

                        try {
                            const { data } = await axios.put(`http://localhost:4000/private/update-score/${course._id}`, { ...values }, config);
                            fetchAllStudents();
                            data.status && setStatus(value => !value)

                        } catch (error) {
                            console.log(error)
                        }
                    }}>
                    {formik => (
                        <Form>
                            <div className='koro flex items-center space-x-2'>
                                <TextField
                                    className={`${course.score >= 70 ? 'score-green' : (course.score >= 60) ? 'score-blue' : (course.score <= 45) ? 'score-red' : ''}`}
                                    label={''}
                                    name={'score'}
                                    type={'number'}
                                />
                                {showBtn && <Scorebtn status={status} />}
                            </div>

                        </Form>

                    )}
                </Formik>
            </TableData>
            <TableData>{course.units}</TableData>
            <TableData>{bc(course)}</TableData>

        </CustomTableRow>

    ))

    function bc(course) {
        if(course.score > 70) {
            alert('70 70')
        }
    }

    return (
        <TableWrapper>
            <TableAdjustMobile>
                <CustomTable>
                    <CustomTableHead >
                        <tr>
                            {renderTableHeading}
                        </tr>
                    </CustomTableHead>
                    <tbody className='w-full'>
                        {tableData.length === 0 ? <span className='text-center  pl-1'>No data available</span> : renderAllScores}
                    </tbody>
                </CustomTable>
            </TableAdjustMobile>
        </TableWrapper>
    )
}




const TableWrapper = styled.section`
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #fff;
    padding-bottom: 40px;

    @media screen and (max-width: 640px){
        box-shadow: none;
        /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
    }

`
const TableTitle = styled.h1`
    margin-left:8px ;
    font-size:20px ;
    font-weight:bold;
    padding:8px 0;
    @media screen and (max-width: 1024px) {font-size: 16px;}
`

const TableAdjustMobile = styled.div`
     overflow-x:auto ;
`
const CustomTable = styled.table`
    width: 100%;
    tr:nth-of-type(even) {
        background:#f4f4f4 ;
    }
`
const CustomTableHead = styled.thead`
    background: #072038;
   
`
const CustomTableRow = styled.tr`
    width: 100%; cursor:pointer ; border-bottom: 1px solid #95999b3c;

`
const TableHeads = styled.th`
    text-align: left;
    padding:8px 16px;
    font-size: 16px;
    color:#fff;
    white-space:nowrap ;
`
const TableData = styled.td`
    padding:8px 16px;
    font-size: 15px;
`