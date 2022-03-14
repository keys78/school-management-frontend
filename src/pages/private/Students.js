import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr } from '../../utils/data';
import useAxiosFetch from '../../utils/useAxiosFetch'



const Students = () => {
    const [allStuds, setAllStuds] = useState('')

    useEffect(() => {
        const fetchAllStudents = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get("http://localhost:4000/private/students", config);
                setAllStuds(data);
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        };

        fetchAllStudents();
    }, []);


  const renderAllStudents = allStuds && allStuds.map((all_s, i) => (
    <div key={i}>
        <p>{ all_s.firstName }</p>
    </div>
  ))
    

    return (
        <ContentWrapper>
            <ContentContainer>
                <div>
                  { renderAllStudents }
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};


export default Students;