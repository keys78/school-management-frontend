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

    const totalQualitypoints = allCourses.map(course => course.qualitypoint).reduce((prev, curr) => prev + curr, 0);
    const totalCreditUnit = allCourses.map(course => course.units).reduce((prev, curr) => prev + curr, 0);

    function qualityPoints() {
        if(allCourses) {
            return totalQualitypoints;
        }
        return 0;
    }
    function creditUnit() {
        if(allCourses) {
            return totalCreditUnit;
        }
        return 0;
    }

    function cgpa () {
        if(allCourses) {
            const cgpa =  qualityPoints() / creditUnit();
            return cgpa.toFixed(1)
        }
        return 0;
    }



    return (
        <SpreadSheetWrapper>
            <SheetWrapper>
                <div>
                    <SheetHead>
                        <h1>e-school</h1>
                        <h2>STUDENT TRANSCRIPT OF ACADEMIC RECORDS</h2>
                    </SheetHead>

                    <StudentInfo>
                        <p><span>MATRIC NUMBER:</span> {user._id}</p>
                        <p><span>FIRSTNAME:</span> {user.firstName}</p>
                        <p><span>LASTNAME:</span> {user.lastName}</p>
                        <p><span>D.O.B:</span> {user.dob}</p>
                        <p><span>NO. OF CREDITS:</span> {allCourses.length}</p>
                    </StudentInfo>
                </div>
                <SheetContent>
                    <CustomTable>
                        {renderTableHeading}
                        {renderSheet}
                    </CustomTable>
                </SheetContent>
                <Calculations>
                    <p>TQP = {qualityPoints()}, TCU = {creditUnit()}</p>
                    <p>CGPA = TQP/TCU = {cgpa()}</p>
                </Calculations>
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
    background:#fff; ;
    padding: 20px 40px 40px 40px;
`


const SheetContent = styled.div`
    background: #fff ;
   
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

const SheetHead = styled.div`
    padding: 20px;
    text-align: center ;
    color: #ffffff;
    margin: 0 auto;
    color: #000;

    & > h1 { font-weight: bold; font-size: 40px;}
    & > h2 { text-decoration: underline;}
`

const StudentInfo = styled.div`
    & > p > span { font-weight: bold; font-size: 18px;}
    & > p { font-size: 16px;}
`

const Calculations = styled.div`
  & > p { font-weight: bold; font-size: 20px;}
`

export default Spreadsheet;
