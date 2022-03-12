import React from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



const Courses = ({ user }) => {

    const myCourses = user?.courses
    const renderCourses = myCourses && myCourses.map((course, i) => (
        <div key={i}>
           <h1>{course.subject} {course.score}</h1>
        </div>
    ))


    const history = useHistory()
    return (
        <ContentWrapper>
            <ContentContainer>
                <div>
                    {renderCourses}
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
}



export default Courses;