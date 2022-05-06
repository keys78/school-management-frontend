import React, { useEffect, useState } from 'react'
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { tableHeading } from '../../utils/data';
import { DataTable } from '../../components/DataTable';
import { User } from 'phosphor-react';
// import { testi } from '../../utils/data';



const Students = ({user, error, searchTerm, setSearchTerm }) => {
    const [data, setData] = useState([])

    // var json_pre = '[{"Id":1,"UserName":"Sam Smith"},{"Id":2,"UserName":"Fred Frankly"},{"Id":1,"UserName":"Zachary Zupers"}]';
    // var json = $.parseJSON(json_pre);
    
    // var csv = JSON2CSV(json);
    // var downloadLink = document.createElement("a");
    // var blob = new Blob(["\ufeff", csv]);
    // var url = URL.createObjectURL(blob);
    // downloadLink.href = url;
    // downloadLink.download = "data.csv";
    
    // document.body.appendChild(downloadLink);
    // downloadLink.click();
    // document.body.removeChild(downloadLink);
    // }

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
                if(user.role === 'teacher') {
                    const x = data.find(val => val.department === user.department)
                    setData(x);
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

        </>
    )
};

export default Students;



