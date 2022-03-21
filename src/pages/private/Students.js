import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr, tableHeading } from '../../utils/data';
import useAxiosFetch from '../../utils/useAxiosFetch'
import DataTable from '../../components/DataTable';



const Students = ({ error }) => {
    const history = useHistory()
    const [allStuds, setAllStuds] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchAllStudents = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get("http://localhost:4000/private/students", config);
                setAllStuds(data);
            } catch (error) {
                console.log(error)
            }
        };

        fetchAllStudents();
    }, []);

    // const moreDetails = (value) => {
    //     console.log(value._id)
    //     history.push(`students/student/${value._id}`)
    // }


    // const renderTableHeading = tableHeading.map((table, i) => (
    //     <TableHeads key={i}>{table.title}</TableHeads>
    // ))

    // const renderAllStudents = allStuds && allStuds.map((val, i) => (
    //     <CustomTableRow key={i}>
    //         <TableData> {1 + i} </TableData>
    //         <TableData> {val.firstName} </TableData>
    //         <TableData> {val.lastName}  </TableData>
    //         <TableData> {val.email}  </TableData>
    //         <TableData><button onClick={() => moreDetails(val)}> more </button></TableData>
    //     </CustomTableRow>

    // ))



    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <ContentWrapper>
            <ContentContainer>
                {/* <TableWrapper>
                    <div className='flex justify-between items-center p-2'>
                        <div className='flex'>
                            Search
                            <h1>Students</h1>
                        </div>
                        Sort
                    </div>
                    <CustomTable>
                        <CustomTableHead >
                            {renderTableHeading}
                        </CustomTableHead>
                        <tbody className='w-full'>
                            {renderAllStudents}
                        </tbody>
                    </CustomTable>
                </TableWrapper> */}

                <DataTable tableHeadingg={tableHeading} tableData={allStuds} />

            </ContentContainer>
        </ContentWrapper>
    )
};

// const TableWrapper = styled.section`
//     border-radius: 10px;
//     box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//     background-color: #fff;
//     padding-bottom: 40px;
// `
// const CustomTable = styled.table`
//     width: 100%;
// `
// const CustomTableHead = styled.thead`
//     background: #3C3D3E;
// `

// const CustomTableRow = styled.tr`
//     width: 100%;
//     border-bottom: 0.5px solid #95999B;
// `
// const TableHeads = styled.th`
//     text-align: left;
//     padding:8px 12px;
//     font-size: 18px;
//     color:#fff;
// `
// const TableData = styled.td`
//     padding:8px 12px;
//     font-size: 15px;
// `

export default Students;



