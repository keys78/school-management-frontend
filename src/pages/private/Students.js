import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr, tableHeading } from '../../utils/data';
import { DataTable } from '../../components/DataTable';



const Students = ({ error, searchTerm, setSearchTerm }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get("http://localhost:4000/private/students", config);
                setData(data);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <ContentWrapper>
            <ContentContainer>
                <DataTable tableHeading={tableHeading}
                    tableData={data}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    data={data}
                    setData={setData}
                    url={"http://localhost:4000/private/students"}
                />
            </ContentContainer>
        </ContentWrapper>
    )
};

export default Students;



