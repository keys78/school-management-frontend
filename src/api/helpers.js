import { useState, useEffect } from "react";
import axios from "axios";

const Aba = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')


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
            setUser(user);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchPrivateData();
    }, []);

    return (
        <></>
    )
}
export default Aba;

