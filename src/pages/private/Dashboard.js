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
                    <DisplayPattern>
                        <WelcomeCard>
                            {greetings} {user.firstName}
                        </WelcomeCard>

                        <div>
                            <p>{user.firstName}</p>
                            <p>{user.lastName}</p>
                            <p>{user.level}</p>
                            <p>{user.email}</p><br />
                            <p>{user.phone}</p><br />
                            <p>{user.address}</p><br />
                            <img className="w-20" src={user.profileImg} alt="profile" />
                            <p>faculty: {user.faculty}</p>
                            <p>department: {user.department}</p>
                        </div>

                        <div>
                            News
                        </div>

                        <div>
                            Today Scores
                        </div>
                    </DisplayPattern>
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
    margin-top: 90px;
    margin-bottom: 10px;
    
`
const WelcomeCard = styled.div`
    /* padding: 150px 30px; */
`
const DisplayPattern = styled.div`
    display: grid;
    grid-template-columns: 30% 45% 25%;
    gap: 20px;
    /* grid-template-columns: repeat(3, 1fr); */

    
    & > div:nth-of-type(1) {
        /* background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(46, 41, 78, 0.02), 0px 8px 12px rgba(46, 41, 78, 0.08); */
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;
        padding: 12px;

    }
    & > div:nth-of-type(2) {
        padding: 12px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;    
    }

    & > div:nth-of-type(3) {
        padding: 12px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;        
        grid-row: span 2 / span 2;	
    }

    & > div:nth-of-type(4) {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;        
        grid-column: span 2 / span 3;
        padding: 120px 12px;
        /* border:0.2px solid gray; */
}
`

export default Dashboard;

{/* <div>{student.courses.map((el) => {
            <p>{el.subject, el.score}</p>
          })}</div> */}