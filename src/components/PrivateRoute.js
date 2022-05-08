import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Layout from "../pages/private/Layout";
import axios from "axios";
import styled from 'styled-components'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useState({})
    const [teachersCount, setTeachersCount] = useState(null);
    const [studentsCount, setStudentsCount] = useState(null)
    const [error, setError] = useState('')
    const [searchTerm, setSearchTerm] = useState('')


    const fetchPrivateData = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {
            // const { data: teacherCount } = await axios.get("http://localhost:4000/private/admin/teachers", config);
            // const { data: studentCount } = await axios.get("http://localhost:4000/private/students", config);

            // console.log(studentCount, teacherCount)
            // setTeachersCount(teacherCount)
            // setStudentsCount(studentCount)

            const { data } = await axios.get("http://localhost:4000/private/user", config);
            setUser(data);

            // if (user.role === 'admin') {
           

            // }



            console.log(data)
        } catch (error) {
            localStorage.removeItem("authToken");
            setError(`session expired please `);
        }
    };

    useEffect(() => {
        fetchPrivateData();
    }, []);



    //   useEffect(() => {
    //     fetchData()
    // }, [user]);


    // const fetchData = async () => {
    //     const config = {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    //         },
    //     };

    //     try {
    //         if (user.role === 'admin') {
    //             const { data: teacherCount } = await axios.get("http://localhost:4000/private/admin/teachers", config);
    //             const { data: studentCount } = await axios.get("http://localhost:4000/private/students", config);

    //             console.log(studentCount, teacherCount)
    //             // setTeachersCount(teacherCount)
    //             // setStudentsCount(studentCount)

    //         }

    //     } catch (error) {
    //         console.log(error)
    //     }
    // };


    return (
        <PrivateWrapper>
            <Route
                {...rest}
                render={(props) =>
                    localStorage.getItem("authToken") ? (
                        <>
                            <Layout user={user} 
                            //  teacherCount={teachersCount}
                            //  studentCount={studentsCount}
                            />

                            <Component
                                // teacherCount={teachersCount}
                                // studentCount={studentsCount}
                                user={user}
                                setUser={setUser}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                error={error}
                                setError={setError}
                                {...props} />
                        </>
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
        </PrivateWrapper>
    );
};

const PrivateWrapper = styled.section`
    max-width:1600px ;
    margin:0 auto;
`

export default PrivateRoute;
