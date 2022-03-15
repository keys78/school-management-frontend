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



const Teachers = ({ error }) => {
    const history = useHistory()
    const [allTeachers, setAllTeachers] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchAllTeachers = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get("http://localhost:4000/private/admin/teachers", config);
                setAllTeachers(data);
            } catch (error) {
                console.log(error)
            }
        };

        fetchAllTeachers();
    }, []);

    const moreDetails = (value) => {
        console.log(value._id)
        history.push(`students/student/${value._id}`)
    }


    const renderAllTeachers = allTeachers && allTeachers.map((val, i) => (

        <div key={i}>
            <p>{val.firstName} {val.lastName} {val.email} <button onClick={() => moreDetails(val)}> more details </button></p>
        </div>

    ))


    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <ContentWrapper>
            <ContentContainer>
                <div>

                    {renderAllTeachers.length !== 0 ? (renderAllTeachers) : (
                       <div> 'You have no new teacher on grrannd'</div>
                    )}

                    <div>
                        Student details
                    </div>
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};


export default Teachers;