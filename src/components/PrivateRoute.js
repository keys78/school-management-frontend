import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Layout from "../pages/private/Layout";
import axios from "axios";
import styled from 'styled-components'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useState({})
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
            const { data } = await axios.get("http://localhost:4000/private/user",  config);
            setUser(data);
        } catch (error) {
            localStorage.removeItem("authToken");
            setError(`session expired please `);
        }
    };

    useEffect(() => {
        fetchPrivateData();
    }, []);

    

    return (
        <PrivateWrapper>
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("authToken") ? (
                    <>
                        <Layout user={ user } />

                        <Component user={ user } 
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
