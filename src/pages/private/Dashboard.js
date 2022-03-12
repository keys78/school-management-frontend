import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import useAxiosFetch from "../../utils/useAxiosFetch";
import wmap from "../../assets/images/wmap.png"
import Calendar from 'react-calendar';
import { lessons } from "../../utils/data";
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";


const Dashboard = ({ user, error }) => {

    // const [error, setError] = useState("");
    const [greetings, setGreetings] = useState('')
    // const [user, setUser] = useState({});
    const history = useHistory();
    const [value, onChange] = useState(new Date());
    const { data: newQuote } = useAxiosFetch('https://api.quotable.io/random')
    const { data: newsApi, fetchError, isLoading } = useAxiosFetch('https://newsapi.org/v2/everything?q=tesla&from=2022-02-10&sortBy=publishedAt&apiKey=1698a7a28ec7488e86f2904e98f596e8')


    useEffect(() => {
        const hour = new Date().getHours();
        const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
        let welcomeText = "";

        if (hour < 12) welcomeText = welcomeTypes[0];
        else if (hour < 16) welcomeText = welcomeTypes[1];
        else welcomeText = welcomeTypes[2];

        setGreetings(welcomeText)
    }, []);


    const myNews = newsApi?.articles
    const renderNews = myNews && myNews.map((news, i) => (
        <NewsBox key={i}>
            <h1>Author: {news.author === null ? "Em_codes" : news.author}</h1>
            <h1>{news.publishedAt}</h1>
            <h1>{news.title}</h1>
            <h1>{news.content}</h1>
            <img className="w-40" src={news.urlToImage} />
            <a target="_blank" href={news.url}>Read more...</a>
        </NewsBox>
    ))

    const renderLessons = lessons.map((lesson, i) => (
        <LessonBox key={i}>
            <h1>{lesson.time}</h1>
            <h1>{lesson.lesson}</h1>
        </LessonBox>
    ))




    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <ContentWrapper>
            <ContentContainer>
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

                                <button onClick={() => history.push('/profile')}>view profile</button>
                            </div>
                            {/* <p>{user.email}</p><br />
                            <p>{user.phone}</p><br />
                            <p>{user.address}</p><br /> */}
                        </UserCard>

                        <div>
                            <CalendarBox>
                                <h1>Calender</h1>
                                <div>
                                    <Calendar onChange={onChange} value={value} />
                                </div>
                            </CalendarBox>

                            <LessonBoxContainer>
                                <h1>My Classes Today</h1>
                                <div> {renderLessons} </div>
                            </LessonBoxContainer>
                        </div>

                        <NewsBoxContainer>
                            <h1>News</h1>
                            {isLoading && 'Loading...'}
                            {newsApi ? renderNews : "loading..."}
                        </NewsBoxContainer>
                    </DisplayPattern>
                }

            </ContentContainer>
        </ContentWrapper>

    );
};



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
        max-width: 100%;

        ::-webkit-scrollbar { width: 1px !important; }
        ::-webkit-scrollbar-track { background: #f1f1f1;  }
        ::-webkit-scrollbar-thumb {  background: #888;  }
        ::-webkit-scrollbar-thumb:hover { background: #555;  }
    }
`

const NewsBox = styled.div`
    max-width: 100%;
    padding: 12px;
    display: grid;
    grid-template-columns: 30% 40% 30%;
    margin-bottom: 15px;
    border-radius:7px ;
    border:0.2px solid #f1f1f1;
    gap:5px;
    box-shadow: rgba(46, 41, 78, 0.08) 0px 1px 4px;

    & > h1:nth-of-type(1) { grid-column: span 2 / span 4; }
    & > h1:nth-of-type(2) { grid-column: span 2 / span 4; text-align: left;}
    & > h1:nth-of-type(3) { grid-column: span 3 / span 4; font-weight: 600; padding-top:6px; color: #faaca8; }
    & > a { grid-column: span 4 / span 4; }
    & > h1:nth-of-type(4) { grid-column: span 2 / span 4;  margin:16px 0;}
    & > img { grid-column: span 2 / span 4;  margin:16px 0; background:#cccccc; }
`

const NewsBoxContainer = styled.div`
    & > h1 { font-weight: 500; font-size: 18px; padding-bottom: 5px;}
`

const LessonBoxContainer = styled.div`
    margin-top: 40px;
    & > div {  height: 250px; overflow-y: scroll;
        ::-webkit-scrollbar { width: 1px !important; }
        ::-webkit-scrollbar-track { background: #f1f1f1;  }
        ::-webkit-scrollbar-thumb {  background: #888;  }
        ::-webkit-scrollbar-thumb:hover { background: #555;  }
    }
    & > h1 { font-weight: 500; font-size: 18px; padding:0 0 5px 0;}
    & > div > div:nth-of-type(odd) { background: #fff1ff; }
`

const LessonBox = styled.div`
    border-radius: 8px;
    margin-bottom: 10px;
    border:0.2px solid #f1f1f1;
    box-shadow: rgba(46, 41, 78, 0.08) 0px 1px 4px;
    padding: 12px 20px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 16px;
    
`
const CalendarBox = styled.div`
    & > h1 { font-weight: 500; font-size: 18px; padding-bottom: 5px;}
`

export default Dashboard;

{/* <div>{student.courses.map((el) => {
  <p>{el.subject, el.score}</p>
})}</div> */}