import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";


const Dashboard = () => {
    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    // const courses = student && student.courses
    // console.log(courses.map(sub => sub.subject))

    const logoutUser = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }

    useEffect(() => {
        const fetchPrivateDate = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get("http://localhost:4000/private/user", config);
                setUser(data);
                console.log(data)
            } catch (error) {
                localStorage.removeItem("authToken");
                setError(`session expired please `);
            }
        };

        fetchPrivateDate();
    }, []);
    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <div>
            <SideNav />
            {user &&
                <div>
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                    <p>{user.role}</p>
                    <p>{user.email}</p><br />
                    <p>{user.phone}</p><br />
                    <p>{user.address}</p><br />
                    <img src={user.profileImg} alt="profile" />
                    <p>faculty: {user.faculty}</p>
                    <p>department: {user.department}</p>


                    {/* <div>{student.courses.map((el) => {
            <p>{el.subject, el.score}</p>
          })}</div> */}
                </div>
            }
            <button onClick={logoutUser}>Logout</button>
        </div>

    );
};

export default Dashboard;