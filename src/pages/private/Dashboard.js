import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useAxiosFetch from "../../utils/useAxiosFetch";
import wmap from "../../assets/images/wmap.png"
import Calendar from 'react-calendar';
import { lessons } from "../../utils/data";
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import { Ghost, Student, UserSwitch, UsersThree } from "phosphor-react";
import TextEditor from "../../components/TextEditor";
import axios from 'axios'
import CountUp from 'react-countup'
import { pageAnimation } from "../../utils/Animations";



const Dashboard = ({ user, error }) => {
    const [greetings, setGreetings] = useState('')
    const history = useHistory();
    const [value, onChange] = useState(new Date());
    const { data: newQuote } = useAxiosFetch('https://api.quotable.io/random')
    const { data: newsApi, fetchError, isLoading } = useAxiosFetch('')

    const [flipUI, setFlipUI] = useState(true)
    const [teachersCount, setTeachersCount] = useState(null);
    const [studentsCount, setStudentsCount] = useState(null)




    useEffect(() => {
        const hour = new Date().getHours();
        const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
        let welcomeText = "";

        if (hour < 12) welcomeText = welcomeTypes[0];
        else if (hour < 16) welcomeText = welcomeTypes[1];
        else welcomeText = welcomeTypes[2];

        setGreetings(welcomeText)

    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                if (user.role === 'admin' || user.role === 'student') {
                    const { data: teacherCount } = await axios.get("http://localhost:4000/private/admin/teachers", config);
                    const { data: studentCount } = await axios.get("http://localhost:4000/private/students", config);

                    setTeachersCount(teacherCount)
                    setStudentsCount(studentCount)

                }

            } catch (error) {
                console.log(error)
            }
        };

        fetchData()
    }, [user]);


    // const renderMyLetcurers = teachersCount && teachersCount.filter(val => val.department === user.department)
    // console.log(renderMyLetcurers)

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

    let [hours, setHours] = useState(0.0)
    let [minutes, setMinutes] = useState(0.0)
    let [seconds, setSeconds] = useState(0.0)

    function clock() {

        setHours(new Date().getHours())
        setMinutes(new Date().getMinutes())
        setSeconds(new Date().getSeconds())

        if (minutes.toString().length === 1) {
            minutes = "0" + minutes;
        }

        if (seconds.toString().length === 1) {
            seconds = "0" + seconds;
        }

        if (hours.toString().length === 1) {
            hours = "0" + hours;
        }
    }

    const interval = setInterval(clock, 1000);



    const clockAnalog = [
        <div className="container">
            <div className="clock">
                <div>
                    <p className="hours">{hours}</p>
                    <p>H</p>
                </div>
                <div>
                    <p className="minutes">{minutes}</p>
                    <p>M</p>
                </div>
                <div>
                    <p className="seconds">{seconds}</p>
                    <p>S</p>
                </div>
            </div>
        </div>
    ]


    return user ? (

        <ContentWrapper>
            <ContentContainer
                variants={pageAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {user.role !== 'admin' === flipUI ? (
                    <>
                        <GreetingsMobile>
                            <Ghost size={20} color="#d51a1a" />&nbsp;{greetings} {user.firstName}

                        </GreetingsMobile>
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
                                        <img className="w-28" src={user.pic} alt="profile" />
                                    </div>
                                    <div>
                                        {user.role === 'admin' && <button className="flipui-btn" onClick={() => setFlipUI(!flipUI)}> Flip UI</button>}
                                        <p>Level: {user.level}</p>
                                    </div>
                                    <div>
                                        <p>{user.firstName} {user.lastName}</p>
                                        <p><span>Faculty:</span> {user.faculty}</p>
                                        <p><span>Department:</span> {user.department}</p>

                                        <button className="sm:border border-gray-300 rounded-xl  sm:px-2" onClick={() => history.push('/profile')}>view profile</button>
                                    </div>
                                </UserCard>

                                <div>
                                    <CalendarBox>
                                        <h1>Calender</h1>
                                        <div>
                                            <Calendar className="w-full" onChange={onChange} value={value} />
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
                                    {newsApi.length < 0 ? renderNews : "No news available, Your news activities would show up here when you have one"}
                                </NewsBoxContainer>
                            </DisplayPattern>
                        }
                    </>
                ) :

                    <AdminDashBoard>
                        <section className="flex items-center justify-between">
                            <h1 className="admin-welcome"> {greetings} <span>Admin</span>, Welcome!</h1>
                            <button className="flipui-btn" onClick={() => setFlipUI(!flipUI)}> Flip UI</button>
                        </section>

                        <div>
                            <div>
                                <div className="single-card">
                                    <div><Student size={30} color="#e52e2e" weight="bold" /></div>
                                    <div>
                                        <h1><CountUp end={studentsCount ? studentsCount.length : 0} duration={2} /></h1>
                                        <p>Students</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-card">
                                    <div><UserSwitch size={30} color="#e52e2e" weight="bold" /></div>
                                    <div>
                                        <h1><CountUp end={teachersCount ? teachersCount.length : 0} duration={2} /> </h1>
                                        <p>Lecturers</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-card">
                                    <div><UsersThree size={30} color="#e52e2e" weight="bold" /></div>
                                    <div>
                                        <h1><CountUp end={studentsCount && teachersCount ? studentsCount.length + teachersCount.length : 0} duration={2} /> </h1>
                                        <p>Total Users</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div>
                                <TextEditor />
                            </div>
                            <div className="solado">
                                {clockAnalog}
                                <div>
                                    <div>
                                        <p>❝{newQuote.content}❞ </p>
                                        <p style={{ float: 'right', }}>~ {newQuote.author} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AdminDashBoard>
                }
            </ContentContainer>
        </ContentWrapper>
    ) : { error };
};








const WelcomeCard = styled.div`
    background-color: #436583;
    overflow: hidden !important;
    color: #fff;
    min-width:300px ;

    @media screen and (max-width: 1280px){
      min-width:200px ;
    }
    @media screen and (max-width: 500px){
      min-width:140px ;
    }

    & > img { position: absolute; top:90px; left:0; opacity: 0.5}
    h1 {
        font-size: 24px;
        font-family: 'Fredoka', sans-serif;

        @media screen and (max-width: 1024px){
            display:none;
        }
    }
    & > div:nth-of-type(1) { margin-top: 20px; 
        @media screen and (max-width: 1280px){
            margin-top:0 ;
        }
    }

    & > div:nth-of-type(2) { margin-top: 40px;
        @media screen and (max-width: 1280px){
            margin-top:12px ;
        }
    }

    p {
        @media screen and (max-width: 500px){
            font-size:13px ;
        }
    }
    & p:nth-of-type(2) { margin-top: 10px; float: right; }
`

const UserCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-width:300px ;

    @media screen and (max-width: 1280px){
      min-width:200px ;
    }

    @media screen and (max-width: 500px){
      min-width:192px ;
    }

    @media screen and (max-width: 400px){
      /* padding:12px 0 ; */
      margin:20px 0 ;
    }

    & > div:nth-last-of-type(3) > p { text-transform: uppercase; }
    & > div:nth-last-of-type(1)  { grid-column: span 2 / span 2; }
    span { font-weight: bold;}
`

const GreetingsMobile = styled.div`
    font-size: 25px;
    display:none ;

    @media screen and (max-width: 1024px){
      display:flex ;
      align-items:center ;
      padding:6px 0;
    }
    @media screen and (max-width: 600px){
      font-size:18px ;
    }
`

const DisplayPattern = styled.div`
    display: grid;
    grid-template-columns: 30% 40% 30%;
    gap: 20px;
    background-color:#fff ;
    padding-right:40px ;

    @media screen and (max-width: 1280px){
      padding-right:25px ;
    }

    @media screen and (max-width: 1024px){
        grid-template-columns: 50% 50%;
    }
    @media screen and (max-width: 600px){
        padding-right:0px ;
        column-gap:5px ;
        row-gap:10px ;
    }
    @media screen and (max-width: 400px){
        display:block ;
    }
    
    & > div:nth-of-type(1) {
        max-height: 350px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;
        padding: 12px;

        @media screen and (max-width: 1024px){
            max-height: 250px;
        }
        @media screen and (max-width: 500px){
            max-height: 180px;
        }
    }
    & > div:nth-of-type(2) {
        max-height: 350px;
        padding: 0 12px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;    

        @media screen and (max-width: 1024px){
            max-height: 250px;
        }
        @media screen and (max-width: 500px){
            font-size:14px ;
            max-height:180px ;

            & > div:nth-of-type(1) > img { width:4rem !important;}
        }

        @media screen and (max-width: 400px){
            padding:12px;
        }
    }

    & > div:nth-of-type(3) {
        padding: 12px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;        
        grid-row: span 2 / span 2;

        & > div:nth-of-type(2) {
                cursor: all-scroll;
        }
        
        @media screen and (max-width: 600px) {
                font-size:14px !important ;
            }
        

        @media screen and (max-width: 1024px) {
            grid-row: span 1 / span 1 ;
            grid-column: span 2 / span 2;
        
            display:flex ; align-items: baseline ; justify-content:space-between ; gap:20px ;

            @media screen and (max-width: 600px) {
                flex-direction: column-reverse ;
            }

            & > div:nth-of-type(1) {
                max-height:312px ;
                padding-top:-20px ;
            }
            & > div:nth-of-type(2) {
                width:130% ;
                max-height:312px ;
                padding-top:-20px ;
                cursor: all-scroll;
                
                @media screen and (max-width: 600px) {
                width:100% ;
            }
            }
        }
    }

    & > div:nth-of-type(4) {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;        
        grid-column: span 2 / span 3;
        padding:12px;
        min-height: 280px;
        overflow-y: scroll;
        max-width: 100%;

        ::-webkit-scrollbar { width: 1px !important; }
        ::-webkit-scrollbar-track { background: #f1f1f1;  }
        ::-webkit-scrollbar-thumb {  background: #888;  }
        ::-webkit-scrollbar-thumb:hover { background: #555;  }

        @media screen and (max-width: 400px){
            margin-top:10px ;
        }
    }
`

const NewsBox = styled.div`
    max-width: 100%;
    padding: 12px;
    display: grid;
    grid-template-columns: 30% 40% 30%;
    margin-bottom: 15px;
    border-radius:7px ;
    border: 1px solid #f1f1f1;
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
    & > div {  height: 270px; overflow-y: scroll;
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




const AdminDashBoard = styled.section`
    
    & > div:nth-of-type(1) { display: grid; grid-template-columns: repeat(3, 1fr) ; column-gap: 20px;
        @media screen and (max-width: 1024px){ grid-template-columns: repeat(2, 1fr); row-gap:20px ;   }
        @media screen and (max-width: 480px){ display:block ;   } }

    /* & > div:nth-of-type(1) div:nth-of-type(1) {
        
        margin:10px 0 ;
    } */

    & > div:nth-of-type(1) div {  padding: 22px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;
        width:100% ;
        

        @media screen and (max-width: 650px){ padding: 11px; }  
        @media screen and (max-width: 480px){ margin:10px 0;}
    }

     & > div:nth-of-type(1) div:nth-of-type(3) {  
        @media screen and (max-width: 1024px){
            grid-column: span 2 / span 2; 
        }
       
     }



    & > div:nth-of-type(2) {  display: grid; grid-template-columns: repeat(2, 1fr) ; column-gap: 20px; 
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; border-radius: 8px;  margin-top: 20px ; padding: 22px; 

        @media screen and (max-width: 991px){ display:grid ; grid-template-columns: 1fr ; }
        @media screen and (max-width: 650px){ padding: 11px; }  
    }

    & > div:nth-of-type(2) div:first-child { border-top-right-radius: 8px; border-top-left-radius: 8px; }
    & > div:nth-of-type(2) div:nth-of-type(2){ 
        /* height: 300px; */
        @media screen and (max-width: 650px){ height:50px; }  
    }

`

export default Dashboard;