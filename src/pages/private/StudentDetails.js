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
import { ArrowLeft } from "phosphor-react";




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

        <ProfileBox>
            <div>
                <img className='w-20 rounded-full' src={studentDetails.profileImg} />
                <div>
                    <p><span>Department: </span> {studentDetails.department}</p>
                    <p><span>Faculty: </span> {studentDetails.faculty}</p>
                </div>
            </div>
            <div>
                <p><span>First Name: </span> {studentDetails.firstName}</p>
                <p><span>Last Name: </span> {studentDetails.lastName}</p>
                <p><span>Gender: </span> {studentDetails.gender}</p>
                <p><span>Role: </span> {studentDetails.role}</p>
                <p><span>Level: </span> {studentDetails.level}</p>
                <p><span>Email: </span> {studentDetails.email}</p>
                <p><span>Phone: </span> {studentDetails.phone}</p>
                <p><span>Current Address: </span> {studentDetails.address}</p>
                <p><span>D.O.B: </span> {studentDetails.dob}</p>
                <p><span>State Of Origin: </span> {studentDetails.soo}</p>
                <p><span>Number Of Courses Registered: </span> {studentDetails && studentDetails.courses.length}</p>
            </div>

        </ProfileBox>
    )

    const renderAcademicRecords = studentDetails && studentDetails.courses.map((course, i) => (
        <div key={i}>
            {/* <span>{course.code}</span>
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
            </Formik> */}

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
                    <button onClick={() => history.goBack()}><ArrowLeft size={20} color="#08546d" weight="bold" /></button>
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


const ProfileBox = styled.div`
 background-color: white;
 width: 100%;
 padding:0 0 20px 0;
 border-radius: 6px;
 margin-top: 20px;


 & > div:nth-of-type(1) {
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    padding:20px 20px;
    color: #fff !important;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
 }
 & > div:nth-of-type(2) {
     margin-top: 20px;
     padding:0 20px;
 }
 
 & div > p {
    line-height: 40px;
 }

 & div > p > span {
     font-weight: 900;
 }

 & > div {
     display: grid;
     grid-template-columns:  repeat(2, 1fr);
 }
`

export default StudentDetails;