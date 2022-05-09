import React from 'react'
import styled from 'styled-components'
import { spreadsheetHeader } from '../utils/data'

const Spreadsheet = ({ allCourses, user }) => {

    const renderTableHeading = spreadsheetHeader.map((table, i) => (
        <TableHeads key={i}>{table.title}</TableHeads>
    ))

    const renderSheet = allCourses && allCourses.map((course, i) => (
        <CustomTableRow key={i} >
            <TableData> {course.title}</TableData>
            <TableData> {course.units}  </TableData>
            <TableData> {course.letterGrade} </TableData>
            <TableData> {course.score} </TableData>

            <TableData> {course.gradepoint} </TableData>
            <TableData> {course.qualitypoint} </TableData>
        </CustomTableRow>

    ))


    return (
        <SpreadSheetWrapper>
            <div>
                <img src="e+school.png" alt="e-school" />
                <h1>STUDENT TRANSCRIPT OF ACADEMIC RECORDS</h1>
            </div>
            <SheetWrapper>
                <SheetContent>
                    <CustomTable>
                        {renderTableHeading}
                        {renderSheet}
                    </CustomTable>
                </SheetContent>
            </SheetWrapper>
        </SpreadSheetWrapper>
    )
}

const SpreadSheetWrapper = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    background: #00000076;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    
`

const SheetWrapper = styled.div`
    padding:10px;
    background:#fff; ;
`


const SheetContent = styled.div`
    background: #fff ;
    padding:20px ;
    border: 1px solid red;
`

const TableHeads = styled.th`
    text-align: left;
    padding:8px 16px;
    font-size: 16px;
    color:#fff;
    white-space:nowrap ;
    background: #072038;
`

const CustomTable = styled.table`
    width: 100%;
    /* tr:nth-of-type(even) {
        background:#f4f4f4 ;
    } */
    border: 1px solid #000;
`
const CustomTableHead = styled.thead`
    background: #072038;
   
`
const CustomTableRow = styled.tr`
    width: 100%; cursor:pointer ; border-bottom: 1px solid #95999b3c;

`

const TableData = styled.td`
    padding:12px 16px;
    font-size: 15px;
`

export default Spreadsheet;
