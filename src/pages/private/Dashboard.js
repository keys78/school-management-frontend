import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import SideNav from "../../components/SideNav";
import Navbar from "../../components/Navbar";
import styled from "styled-components";


const Dashboard = () => {
    const [error, setError] = useState("");
    const [greetings, setGreetings] = useState('')
    const [user, setUser] = useState({});
    const history = useHistory();



    const logoutUser = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
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

        const hour = new Date().getHours();
        const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
        let welcomeText = "";

        if (hour < 12) welcomeText = welcomeTypes[0];
        else if (hour < 16) welcomeText = welcomeTypes[1];
        else welcomeText = welcomeTypes[2];

        setGreetings(welcomeText)
    }, []);


    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <DashboardWrapper>
            <DashboardContainer>
                {user &&
                    <div>
                        <WelcomeCard>
                            {greetings} {user.firstName}
                        </WelcomeCard>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                        <p>{user.role}</p>
                        <p>{user.email}</p><br />
                        <p>{user.phone}</p><br />
                        <p>{user.address}</p><br />
                        <img className="w-20" src={user.profileImg} alt="profile" />
                        <p>faculty: {user.faculty}</p>
                        <p>department: {user.department}</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />


                        {/* <div>{student.courses.map((el) => {
            <p>{el.subject, el.score}</p>
          })}</div> */}
                        <button onClick={logoutUser}>Logout</button>
                    </div>
                }

            </DashboardContainer>
        </DashboardWrapper>

    );
};

const DashboardWrapper = styled.section`
    /* border: 1px solid red; */
    padding-left: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DashboardContainer = styled.section`
    /* border: 2px solid green; */
    width: 90%;
    margin-top: 80px;
    
`
const WelcomeCard = styled.div`
    border: 1px solid black;
    background: gray;
    padding: 150px 30px;
`

export default Dashboard;