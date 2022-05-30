import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { spreadsheetHeader } from '../utils/data'
import { useReactToPrint } from "react-to-print";
import { Printer, XCircle } from 'phosphor-react';
import { sheetModalVariant } from '../utils/Animations';
import { motion } from 'framer-motion';



const Spreadsheet = ({ allCourses, user, setIsSpreadSheet }) => {
    const [deg, setDeg] = useState('')
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const renderTableHeading = spreadsheetHeader.map((table, i) => (
        <TableHeads key={i}>{table.title}</TableHeads>
    ))

    const renderSheet = allCourses && allCourses.map((course, i) => (
        <CustomTableRow key={i} >
            <TableData> {course.code}</TableData>
            <TableData style={{ minWidth: '300px' }}> {course.title}</TableData>
            <TableData> {course.units}  </TableData>
            <TableData> {course.score} </TableData>
            <TableData> {course.letterGrade} </TableData>
            <TableData> {course.gradepoint} </TableData>
            <TableData> {course.qualitypoint} </TableData>
        </CustomTableRow>

    ))

    const totalQualitypoints = allCourses.map(course => course.qualitypoint).reduce((prev, curr) => prev + curr, 0);
    const totalCreditUnit = allCourses.map(course => course.units).reduce((prev, curr) => prev + curr, 0);

    function qualityPoints() {
        if (allCourses) {
            return totalQualitypoints;
        }
        return 0;
    }
    function creditUnit() {
        if (allCourses) {
            return totalCreditUnit;
        }
        return 0;
    }

    function cgpa() {
        if (allCourses) {
            const cgpa = qualityPoints() / creditUnit();
            return cgpa.toFixed(1)
        }
        return 0;
    }

    useEffect(() => {
        const cgpa = qualityPoints() / creditUnit();
        if (cgpa >= 4.5) { setDeg('First Class Honours') }
        if (cgpa >= 3.5 && cgpa <= 4.49) { setDeg('Second Class Upper') }
        if (cgpa >= 2.4 && cgpa <= 3.49) { setDeg('Second Class Lower') }
        if (cgpa >= 1.5 && cgpa <= 2.39) { setDeg('Third Class') }
        if (cgpa >= 1.0 && cgpa <= 1.49) { setDeg('Pass') }
        if (cgpa < 1.0) { setDeg('Fail') }
    }, [])


    return (
        <SpreadSheetWrapper>
            <TableFluid>
                <SheetWrapper
                    variants={sheetModalVariant}
                    initial="initial"
                    animate="final"
                    exit="exit"
                    ref={componentRef}>
                    <div>
                        <div>
                            <SheetHead>
                                <h1>e-school</h1>
                                <h2>STUDENT TRANSCRIPT OF ACADEMIC RECORDS</h2>

                                <PrintBtn onClick={handlePrint}>
                                    <Printer size={16} color="#072038" />
                                    <span >Print Sheet</span>
                                </PrintBtn>
                                <Close onClick={() => setIsSpreadSheet(false)}>
                                    <XCircle size={16} color="#3e2d2d" weight="bold" />
                                </Close>

                            </SheetHead>

                            <StudentInfo>
                                <p><span>MATRIC NUMBER:</span> {`ES-${user._id}`}</p>
                                <p><span>FIRSTNAME:</span> {user.firstName}</p>
                                <p><span>LASTNAME:</span> {user.lastName}</p>
                                <p><span>FACULTY:</span> {user.faculty}</p>
                                <p><span>DEPARTMENT:</span> {user.department}</p>
                                <p><span>NO. OF CREDITS:</span> {allCourses.length}</p>
                            </StudentInfo>
                        </div>
                        <SheetContent>
                            <CustomTable>
                                <CustomTableHead>
                                    <tr>
                                        {renderTableHeading}
                                    </tr>
                                </CustomTableHead>
                                <tbody className='w-full'>
                                    {allCourses.length === 0 ? <span className='text-center  pl-1'>No data available</span> : renderSheet}
                                </tbody>
                            </CustomTable>
                        </SheetContent>
                        <Calculations>
                            <p>TQP = {qualityPoints()}, TCU = {creditUnit()}</p>
                            <p>CGPA = TQP/TCU = {cgpa()}</p>
                            <p>Class oF Degree: {deg}</p>
                        </Calculations>
                    </div>
                </SheetWrapper>
            </TableFluid>

        </SpreadSheetWrapper>
    )
}

const SpreadSheetWrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    background: #00000076;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    
`

const SheetWrapper = styled(motion.div)`
    background:#fff; ;
    border-radius:4px ;
    position:relative ;
    margin:0 15px ;
    overflow-x:auto ;
    height:100vh ;
    overflow-y:scroll ;

    @media screen and (max-width: 480px){
            margin:auto 15px ;
            height:95vh ;
    }

   ::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
	border-radius: 10px;
    }

::-webkit-scrollbar {
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb{
	border-radius: 10px;
	background-image: -webkit-gradient(linear, left bottom, left top,
	color-stop(0.44, rgb(122,153,217)),
	color-stop(0.72, #06090f),
	color-stop(0.86, #1d1d1f));
}

    

    & > div:nth-of-type(1) {
        border: 1px solid #00000036;
        padding: 5px;
        padding: 20px 40px 40px 40px;
        margin:10px ; border-radius:4px ;
        overflow-x:auto ;

        @media screen and (max-width: 480px){
            padding: 20px 15px 20px 15px;
    }

    }
`


const SheetContent = styled.div`
    /* background: #fff ; */
   
`
const TableFluid = styled.div`
     overflow-x:auto ;
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
    tr:nth-of-type(even) {
        background:#f4f4f4 ;
    }
    border: 1px solid #000;
    margin: 20px 0;
`
const CustomTableHead = styled.thead`
    background: #072038;
   
`
const CustomTableRow = styled.tr`
    width: 100%;  border: 1px solid #95999b3c;

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
    overflow-x:auto ;

    


    & > h1 { font-weight: bold; font-size: 40px;
        @media screen and (max-width: 480px){
        font-size: 32px;
    }
    }
    & > h2 { text-decoration: underline;}
`

const StudentInfo = styled.div`
    & > p > span { font-weight: bold; font-size: 16px;
        @media screen and (max-width: 480px){
        font-size: 14px;
    }
    }
    & > p { font-size: 16px;}
`

const Calculations = styled.div`
  & > p { font-weight: bold; font-size: 20px;}
`

const PrintBtn = styled.button`
    display:flex ;
    align-items:center ;
    font-size:15px ;
    justify-content:space-between ;
    border: 1px solid #000000a3;
    gap:5px;
    border-radius:5px ;
    padding: 4px 8px ;
    position: absolute ;
    top:20px ;
    right:20px;
    transition:0.4s ;
    background:#fff ;

    &:hover {
        background:#00000025 ;
        transition:0.4s ;
    }
`

const Close = styled.div`
     position: absolute ;
    top:20px ;
    left:20px;
    cursor: pointer;
`

export default Spreadsheet;
