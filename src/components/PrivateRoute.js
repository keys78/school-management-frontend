import { useState, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import Layout from "../pages/private/Layout";
import axios from "axios";
import styled from 'styled-components'
import { useActive } from "../hooks/useActive";


const PrivateRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const history = useHistory();

    const active = useActive(8000)


    useEffect(() => {
        const token = localStorage.getItem('authToken')

        const refresh =
            setInterval(() => {
                if (token) {
                    localStorage.removeItem('authToken')
                    history.push('/login')
                }
                alert('Session Expired')

            }, 600000)
        return () => clearInterval(refresh);

    }, [])


    const fetchPrivateData = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {

            const { data } = await axios.get("https://my-e-school-api.herokuapp.com/private/user", config);
            setUser(data);

        } catch (error) {
            localStorage.removeItem("authToken");
            setError(`session expired please `);
        }
    };

    useEffect(() => {
        fetchPrivateData();
    }, []);

    useEffect(() => {
        const status = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                active ? 
                    await axios.post("https://my-e-school-api.herokuapp.com/private/activeStatus", {}, config) :
                    await axios.post("https://my-e-school-api.herokuapp.com/private/inactiveStatus", {}, config)

                    const { data } = await axios.get("https://my-e-school-api.herokuapp.com/private/user", config);

                    setUser(data)


            } catch (error) {
                console.log(error)
            }
        };

        status()
    }, [active])






    return (
        <PrivateWrapper>
            <Route
                {...rest}
                render={(props) =>
                    localStorage.getItem("authToken") ? (
                        <>
                            <Layout user={user}
                            />

                            <Component
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
