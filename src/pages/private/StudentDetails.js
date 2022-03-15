import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import { useParams, useHistory } from "react-router-dom";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate, validateScore } from '../../utils/validateForm';
import axios from 'axios';




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

    const renderAcadRecords = studentDetails && studentDetails.courses.map((course, i) => (
        <div key={i}>
            <span>{course.title}</span>
            <Formik
                initialValues={{
                   score:course.score
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

    return (
        <ContentWrapper>
            <ContentContainer>
                <div>
                    <button onClick={() => history.goBack()}>Back</button>
                    <p>{studentDetails.firstName}</p>
                    <p>{studentDetails.lastName}</p>
                </div>
                <div>
                    Academics <br />

                    {renderAcadRecords}
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};


export default StudentDetails;