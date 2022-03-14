import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Layout from "../pages/private/Layout";
import axios from "axios";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useState({})

    const [error, setError] = useState('')
    useEffect(() => {
        const fetchPrivateData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get("http://localhost:4000/private/user", config);
                setUser(data);
            } catch (error) {
                localStorage.removeItem("authToken");
                setError(`session expired please `);
            }
        };

        fetchPrivateData();
    }, []);

    return (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("authToken") ? (
                    <>
                        <Layout user={ user }/>
                        <Component user={user} error={error} setError={setError} {...props} />
                    </>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
