import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import axios from 'axios';
import { facultyArr, courseArr, tableRegisterCourses, tableAcademics } from '../../utils/data';
import Button from '../../components/Button';



const Courses = ({ user, setUser}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [buttonStatus, setButtonStatus] = useState('Add')
    const allCourses = user?.courses
    // const renderAll = allCourses && allCourses.map((mycourse, i) => (
    //     <div>
    //         {i + 1} &nbsp;
    //         {mycourse.code} &nbsp;
    //         {mycourse.title} &nbsp;
    //         {mycourse.score} &nbsp;
    //         {mycourse.units}
    //     </div>
    // ))


    const renderRegCoursesHeading = tableAcademics.map((table, i) => (
        <TableHeads key={i}>{table.title}</TableHeads>
    ))

    const renderRegSubjects = allCourses && allCourses.map((course, i) => (
        <CustomTableRow key={i}>
            <TableData>{i + 1}</TableData>
            <TableData>{course.code}</TableData>
            <TableData>{course.title}</TableData>
            <TableData>{course.score}</TableData>
            <TableData>{course.units}</TableData>
        </CustomTableRow>
    ))



    const getFaculty = facultyArr && facultyArr.find(val => val.faculty === user.faculty)
    const getDept = getFaculty && getFaculty.departments.map(depts => depts.department)
    const myCourses = getDept && courseArr.find(el => el.department === user.department).courses

    useEffect(() => { }, [])

    // const c1 = allCourses.map(e => e.code)
    // const c2 = myCourses.map(e => e.code)

    // const diff = c2.filter(e => c1.includes(e))
    // console.log('ppp', diff)

    // const checkButtonStatus = () => myCourses.find(el => {
    //     // console.log('ddd', c1.includes(el.code))
    //    return c1.includes(el.code)
    // })

    // // console.log('ddd', checkButtonStatus)

    const renderTableHeading = tableRegisterCourses.map((table, i) => (
        <TableHeads key={i}>{table.title}</TableHeads>
    ))

    const renderSubjects = myCourses && myCourses.map((course, i) => (
        <CustomTableRow key={i}>
            <TableData>{i + 1}</TableData>
            <TableData>{course.code}</TableData>
            <TableData>{course.title}</TableData>
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

        // value. setButtonStatus('Reg No')

        // const getApiCode = allCourses && allCourses.find(mycourse => mycourse.code)
        // const getApiStatus = allCourses && allCourses.map(mycourse => mycourse.status === true)
        // const getLocalCode = myCourses && myCourses.map(course => course.code)

        // if (getApiCode === getLocalCode && getApiStatus) {
        //     setButtonStatus('Registered')
        // }
        // window.location.reload(false);
    }

    const confirmCourseReg = () => {
        alert('Course Successfully Registered')
        setIsModalOpen(!isModalOpen)
    }




    return (
        <ContentWrapper>
            <ContentContainer>
                <div className='flex items-center justify-between'>
                    <h1>Courses</h1>
                    <Button onClick={() => setIsModalOpen(!isModalOpen)} text={'Register Courses'} padding={'py-2'} margin={'my-4'} color={'text-white'} width={'4/12'} />
                    {/* <button >Register Courses</button> */}
                </div>
                <div>
                    {isModalOpen &&
                        <E_Modal>
                            <FormBox>
                                <TableWrapper>
                                    <HeaderTitle>Courses Outlined for {user.department} Students </HeaderTitle>
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
                                </TableWrapper>
                                <div>
                                    <button onClick={() => setIsModalOpen(!isModalOpen)}>Cancel</button>
                                    <button onClick={confirmCourseReg}>Done</button>
                                </div>
                            </FormBox>
                        </E_Modal>
                    }
                    <TableWrapper>
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
    padding-left: 210px;
    z-index: 9;

    & > h1 > span { color: cyan; }
    
`

const FormBox = styled.div`
    background: #19262F;
    max-width: 600px;
    padding:20px;
    border-radius: 6px;
    color:#19262F;

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
export default Courses;