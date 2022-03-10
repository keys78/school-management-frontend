import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import useAxiosFetch from "../../utils/useAxiosFetch";
import wmap from "../../assets/images/wmap.png"
import Calendar from 'react-calendar';

const Dashboard = () => {
    const [error, setError] = useState("");
    const [greetings, setGreetings] = useState('')
    const [user, setUser] = useState({});
    const history = useHistory();
    const [value, onChange] = useState(new Date());
    const { data: newQuote } = useAxiosFetch('https://api.quotable.io/random')
    const { data: newsApi, fetchError, isLoading } = useAxiosFetch('https://newsapi.org/v2/everything?q=tesla&from=2022-02-10&sortBy=publishedAt&apiKey=1698a7a28ec7488e86f2904e98f596e8')

    const myNews = newsApi?.articles
    console.log(myNews)

    const renderNews = myNews && myNews.map((news, i) => (
        <NewsBox>
            <h1>{news.author === null ? "Em_codes" : news.author}</h1>
            <h1>{news.publishedAt}</h1>
            <img className="w-40" src={news.urlToImage} />
            <h1>{news.title}</h1>
            <a href={news.url}>Go</a>
            <h1>{news.content}</h1>
        </NewsBox>
    ))


    console.log(renderNews)

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
                            <div>
                                <h1>
                                    {greetings} {user.firstName}
                                </h1>
                            </div>
                            <div>
                                <p>❝{newQuote.content}❞ </p>
                                <p>~ {newQuote.author} </p>
                                <img src={wmap} />
                            </div>
                        </WelcomeCard>

                        <UserCard>
                            <div>
                                <img className="w-28" src={user.profileImg} alt="profile" />
                            </div>
                            <div>
                                <p>Level: {user.level}</p>
                            </div>
                            <div>
                                <p>{user.firstName} {user.lastName}</p>
                                <p><span>Faculty:</span> {user.faculty}</p>
                                <p><span>Department:</span> {user.department}</p>
                            </div>
                            {/* <p>{user.email}</p><br />
                            <p>{user.phone}</p><br />
                            <p>{user.address}</p><br /> */}
                        </UserCard>

                        <div>
                            Calender
                            <div>
                                <Calendar onChange={onChange} value={value} />
                            </div>
                        </div>

                        <div>
                            {isLoading && 'Loading...'}
                            {newsApi ? renderNews : "loading..."}
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
    background-color: #436583;
    overflow: hidden !important;
    color: #fff;
    & > img { position: absolute; top:90px; left:0; opacity: 0.5}
    h1 {
        font-size: 24px;
        font-family: 'Fredoka', sans-serif;
    }
    & > div:nth-of-type(1) { margin-top: 20px; }
    & > div:nth-of-type(2) { margin-top: 40px;}
    & p:nth-of-type(2) { margin-top: 10px; float: right;}
`

const UserCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    & > div:nth-last-of-type(3) > p { text-transform: uppercase; }
    span { font-weight: bold;}

    
`

const DisplayPattern = styled.div`
    display: grid;
    grid-template-columns: 30% 40% 30%;
    gap: 20px;
    padding-right: 40px;
    
    & > div:nth-of-type(1) {
        height: 350px;
        /* box-shadow: 0px 1px 4px rgba(46, 41, 78, 0.02), 0px 8px 12px rgba(46, 41, 78, 0.08);  */
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
        padding:12px;
        height: 250px;
        overflow-y: scroll;
    }
`

const NewsBox = styled.div`
        max-width: 600px;
        border: 1px solid red;
        display: grid;
        grid-template-columns: 30% 40% 30%;
    `

export default Dashboard;

{/* <div>{student.courses.map((el) => {
            <p>{el.subject, el.score}</p>
          })}</div> */}