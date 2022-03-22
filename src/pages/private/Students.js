import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr, tableHeading } from '../../utils/data';
import useAxiosFetch from '../../utils/useAxiosFetch'
import DataTable from '../../components/DataTable';



const Students = ({ error, searchTerm, setSearchTerm }) => {
    const history = useHistory()
    const [allStuds, setAllStuds] = useState([])
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

    useEffect(() => {
        setAllStuds(allStuds)
        // dispatch(getTemplates())
    }, [allStuds])



    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <ContentWrapper>
            <ContentContainer>
                <DataTable tableHeading={tableHeading} tableData={allStuds} searchTerm={searchTerm} setSearchTerm={setSearchTerm} allStuds={allStuds}  setAllStuds={setAllStuds}/>
            </ContentContainer>
        </ContentWrapper>
    )
};

export default Students;



