import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr } from '../../utils/data';



const Courses = ({ user }) => {
    const x = user?.courses

    const [buttonStatus, setButtonStatus] = useState('Addd')

    const getFaculty = facultyArr && facultyArr.find(val => val.faculty === user.faculty)
    const getDept = getFaculty && getFaculty.departments.map(depts => depts.department)
    const myCourses = getDept && courseArr.find(el => el.department === user.department).courses


    const checkStatus = x && x.map(t => t.status)
    console.log(checkStatus)

    const renderSubjects = myCourses && myCourses.map((course, i) => (
        <div key={i}>
            <span>{course.code}</span>
            <span>{course.title}</span>
            <span>{course.units}</span>
            <div onClick={() => registerCourse(course)}>{checkStatus === true ? "Registred" : "Add"}</div>
        </div>
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

        const checkDuplicate = x.find(el => el.code === selectedCourse.code)
        // console.log(checkDuplicate)
        if (checkDuplicate) {
            return alert('Alreay exists')
        } else {

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.post(`http://localhost:4000/private/register-course/${user._id}`, selectedCourse, config);
                // await axios.get(`http://localhost:4000/private/user`, config);
                // window.reload()
                alert('courses registered')
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    }






    return (
        <ContentWrapper>
            <ContentContainer>
                <div>
                    <FormBox>
                        {renderSubjects}
                        <button> Done </button>
                    </FormBox>
                    {/* {renderAll} */}
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
}

const FormBox = styled.form`
    border: 1px solid black;
`

export default Courses;