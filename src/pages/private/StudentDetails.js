import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import { useParams, useHistory } from "react-router-dom";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate, validateScore } from '../../utils/validateForm';
import axios from 'axios';
import Tabs from '../../components/Tabs';
import DataTable from '../../components/DataTable';




const StudentDetails = () => {
    const [studentDetails, setStudentDetails] = useState('');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchAllStudents = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios
                    .get("http://localhost:4000/private/students", config);
                const getStudById = data.find(val => val._id === id)
                setStudentDetails(getStudById)
                console.log(getStudById)
                console.log(studentDetails)
            } catch (error) {
                console.log(error)
            }
        };

        fetchAllStudents();
    }, []);


    
    const renderProfile = (
        
        <div>
            <p>{studentDetails.firstName}</p>
            <p>{studentDetails.lastName}</p>
        </div>
    )

    const renderAcademicRecords = studentDetails && studentDetails.courses.map((course, i) => (
        <div key={i}>
            <span>{course.title}</span>
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
                        await axios.put(`http://localhost:4000/private/update-score/${course._id}`, { ...values }, config);
                        alert('score has been updatd')
                    } catch (error) {
                        console.log(error)
                    }
                }}>
                {formik => (
                    <Form>
                        <div>
                            <TextField label={''} name={'score'} type={'number'} />
                        </div>
                        <button type='submit'>Update Score</button>

                    </Form>

                )}
            </Formik>

        </div>
    ))

    const tabContent = [
        {
            title: 'Profile',
            content: renderProfile
        },
        {
            title: 'Academic Records',
            content: renderAcademicRecords
        }
    ]

    return (
        <ContentWrapper>
            <ContentContainer>
                <div>
                <button onClick={() => history.goBack()}>Back</button>
                    <Tabs active={0}>
                        {tabContent.map((tab, idx) => (
                            <Tabs.TabPane key={`Tab ${idx}`} tab={tab.title} >
                                {tab.content}
                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};


export default StudentDetails;