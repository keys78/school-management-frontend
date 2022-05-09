import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import axios from 'axios';
import { facultyArr, courseArr, tableRegisterCourses, tableAcademics } from '../../utils/data';
import Button from '../../components/Button';
import { X } from 'phosphor-react';
import Spreadsheet from '../../components/Spreadsheet';



const Courses = ({ user, setUser }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSpreadSheet, setIsSpreadSheet] = useState(false)
    const [buttonStatus, setButtonStatus] = useState('Add')
    const allCourses = user?.courses

    const renderRegCoursesHeading = tableAcademics.map((table, i) => (
        <TableHeads key={i}>{table.title}</TableHeads>
    ))


    const renderRegSubjects = allCourses && allCourses.map((course, i) => (
        <CustomTableRow key={i}>
            <TableData>{i + 1}</TableData>
            <TableData>{course.code}</TableData>
            <TableData className="title-field">{course.title}</TableData>
            <TableData className={`${course.score >= 70 ? 'score-green' : (course.score >= 60) ? 'score-blue' : (course.score <= 45) ? 'score-red' : ''}`}>{course.score}</TableData>
            <TableData>{course.units}</TableData>
        </CustomTableRow>
    ))




    function cgpa() {
        if (allCourses) {
            const totalQualitypoints = allCourses.map(item => item.qualitypoint).reduce((prev, curr) => prev + curr, 0);
            const totalCreditUnits = allCourses.map(item => item.units).reduce((prev, curr) => prev + curr, 0);
            const cgpa = totalQualitypoints / totalCreditUnits
            return cgpa.toFixed(1)
        }
        return 0;
    }










    const getFaculty = facultyArr && facultyArr.find(val => val.faculty === user.faculty)
    const getDept = getFaculty && getFaculty.departments.map(depts => depts.department)
    const myCourses = getDept && courseArr.find(el => el.department === user.department).courses


    const renderTableHeading = tableRegisterCourses.map((table, i) => (
        <TableHeads key={i}>{table.title}</TableHeads>
    ))

    const renderSubjects = myCourses && myCourses.map((course, i) => (
        <CustomTableRow key={i}>
            <TableData>{i + 1}</TableData>
            <TableData>{course.code}</TableData>
            <TableData className="title-field">{course.title}</TableData>
            <TableData>{course.units}</TableData>
            <TableData>
                <div onClick={() => registerCourse(course)}> {buttonStatus}</div>
            </TableData>
            {/* <TableData> <div className='cursor-pointer' onClick={() => registerCourse(course)}>{buttonStatus}</div> </TableData> */}
        </CustomTableRow>
    ))


    const registerCourse = async (value) => {

        const selectedCourse = {
            code: value.code,
            title: value.title,
            units: value.units,
            score: value.score,
            status: true
        }

        console.log(selectedCourse)

        const checkDuplicate = allCourses.find(el => el.code === selectedCourse.code)
        if (checkDuplicate) {
            return alert('Already registered for this course')
        } else {

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                await axios.post(`http://localhost:4000/private/register-course/${user._id}`, selectedCourse, config);
                const { data } = await axios.get(`http://localhost:4000/private/user`, config);
                alert('course has been registered')
                setUser(data)

            } catch (error) {
                console.log(error)
            }
        }

    }

    const confirmCourseReg = () => {
        alert('Course Successfully Registered')
        setIsModalOpen(!isModalOpen)
    }




    return (
        <ContentWrapper>
            <ContentContainer>
                <div className='flex items-center justify-between'>
                    <h1 className='profile-header'>Courses</h1>
                    <button onClick={() => setIsModalOpen(!isModalOpen)}>Register Courses</button>
                </div>
                <div>
                    {isModalOpen &&
                        <E_Modal>
                            <FormBox>
                                <TableWrapper>

                                    <HeaderTitle>Courses Outlined for {user.department} Students </HeaderTitle>
                                    <TableAdjustMobile>
                                        <CustomTable>
                                            <CustomTableHead >
                                                <tr>
                                                    {renderTableHeading}
                                                </tr>

                                            </CustomTableHead>
                                            <tbody className='w-full'>
                                                {renderSubjects}
                                            </tbody>
                                        </CustomTable>
                                    </TableAdjustMobile>
                                </TableWrapper>
                                <div>
                                    <button onClick={() => setIsModalOpen(!isModalOpen)}>Cancel</button>
                                    <button onClick={confirmCourseReg}>Done</button>
                                </div>
                            </FormBox>

                        </E_Modal>
                    }
                    <TableWrapper>
                        <TableAdjustMobile>
                            <CustomTable>
                                <CustomTableHead >
                                    <tr>
                                        {renderRegCoursesHeading}
                                    </tr>
                                </CustomTableHead>
                                <tbody className='w-full'>
                                    {renderRegSubjects}
                                </tbody>
                            </CustomTable>
                        </TableAdjustMobile>
                        cgpa: {cgpa()}
                        <button className='p-2 bg-red-500' onClick={() => setIsSpreadSheet(!isSpreadSheet)}>View Spreadsheet</button>
                        {isSpreadSheet && <Spreadsheet allCourses={allCourses} user={user}/>}
                    </TableWrapper>
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
}


const E_Modal = styled.div`
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

    & > h1 > span { color: cyan; }
    
`

const FormBox = styled.div`
    background: #19262F;
    max-width:620px;
 
    /* overflow-x:auto ; */
    padding:20px;
    border-radius: 6px;
    color:#19262F;

    
    @media screen and (max-width: 650px) {
      max-width:100% ;
      margin:0 20px ;
    }

    & > div {  margin-top:25px; display: flex; align-items: center; justify-content: space-between;}
    & > div > button { padding:3px 10px; border-radius: 6px; }
    & > div > button:nth-of-type(1) { background: cyan; color: #19262F; }
    & > div > button:nth-of-type(2) {background: red; color: #fff;}
 `
const HeaderTitle = styled.h1`
    font-weight: 900;
    font-size: 15px;
    padding: 5px 20px;
`

const TableWrapper = styled.section`
    border-radius: 10px;
    background-color: #fff;
    padding-bottom: 40px;
    width:100% ;
    overflow-x:auto ;
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
    padding:8px 16px;
    font-size: 18px;
    color:#fff;
`
const TableData = styled.td`
    padding:8px 16px;
    font-size: 15px;
`

const TableAdjustMobile = styled.div`
     overflow-x:auto ;
`
export default Courses;