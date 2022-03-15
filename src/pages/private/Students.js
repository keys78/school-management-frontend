import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr } from '../../utils/data';
import useAxiosFetch from '../../utils/useAxiosFetch'



const Students = ({ error }) => {
    const history = useHistory()
    const [allStuds, setAllStuds] = useState('')
    const [isOpen, setIsOpen] = useState(false)

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
            } catch (error) {
                console.log(error)
            }
        };

        fetchAllStudents();
    }, []);

    const moreDetails = (value) => {
        console.log(value._id)
        history.push(`students/student/${value._id}`)
    }


    const renderAllStudents = allStuds && allStuds.map((val, i) => (
        <div key={i}>
            <p>{val.firstName} {val.lastName} <button onClick={() => moreDetails(val)}> more details </button></p>
        </div>
    ))


    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <ContentWrapper>
            <ContentContainer>
                <div>
                    {renderAllStudents}

                    <div>
                        Student details
                    </div>
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};


export default Students;