import React, { useEffect, useState } from 'react'
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { tableHeading } from '../../utils/data';
import { DataTable } from '../../components/DataTable';
// import { testi } from '../../utils/data';



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
                    tableTitle={'Students'}
                />
            </ContentContainer>
        </ContentWrapper>
    )
};

export default Students;



