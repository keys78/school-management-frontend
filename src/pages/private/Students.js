import React, { useEffect, useState } from 'react'
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { tableHeading } from '../../utils/data';
import { DataTable } from '../../components/DataTable';
import { pageAnimation } from '../../utils/Animations';




const Students = ({ user, error, searchTerm, setSearchTerm }) => {
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
                if (user.role === 'teacher') {
                    const studentsToTeacher = data.filter(val => val.department === user.department)
                    return setData(studentsToTeacher)
                } else {
                    setData(data)
                    localStorage.setItem('SD', JSON.stringify(data));
                }

            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <>
            <ContentWrapper>
                <ContentContainer
                    variants={pageAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <DataTable tableHeading={tableHeading}
                        user={user}
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

        </>
    )
};

export default Students;



