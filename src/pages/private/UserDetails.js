import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper, FullDisplay, Close, ImageBox } from "../../assets/css/GlobalStyled";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import Tabs from '../../components/Tabs';
import { DataTableAcademics } from '../../components/DataTable';
import { ArrowLeft, X } from "phosphor-react";
import { motion, AnimatePresence } from 'framer-motion'
import { tableAcademics } from '../../utils/data';
import { zoomOutVariants } from '../../utils/Animations';




const UserDetails = ({ user, setUser }) => {
    const [userDetails, setUserDetails] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isZoomed, setIsZoomed] = useState(false)
    const imageBoxRef = useRef()
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {

        fetchAllStudents();
    }, []);

    const fetchAllStudents = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {
            let endpoints = [
                "http://localhost:4000/private/students",
                "http://localhost:4000/private/admin/teachers"
            ];

            axios.all(endpoints.map((endpoint) => axios.get(endpoint, config))).then(
                (data) => {
                    let students = (data[0].data)
                    let lecturers = (data[1].data)

                    const allUsers = students.concat(lecturers);
                    const getUserById = allUsers.find(val => val._id === id)
                    setUserDetails(getUserById)

                }
            );
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => { document.body.addEventListener('mousedown', handleClickOutside) })
    const handleClickOutside = (event) => {
        imageBoxRef.current && !imageBoxRef.current.contains(event.target) && setIsZoomed(false)
    };


    const renderProfile = (
        <ProfileBox key={+1}>
            <div>
                <img className='w-20 h-20 rounded-full zoom-in' src={userDetails.pic} alt="Profile Image" onClick={() => setIsZoomed(!isZoomed)} />
                <div>
                    <p><span>Department: </span> {userDetails.department}</p>
                    <p><span>Faculty: </span> {userDetails.faculty}</p>
                </div>
            </div>
            <div>
                <p><span>First Name: </span> {userDetails.firstName}</p>
                <p><span>Last Name: </span> {userDetails.lastName}</p>
                <p><span>Gender: </span> {userDetails.gender}</p>
                <p><span>Role: </span> {userDetails.role}</p>
                <p><span>Level: </span> {userDetails.level}</p>
                <p><span>Email: </span> {userDetails.email}</p>
                <p><span>Phone: </span> {userDetails.phone}</p>
                <p><span>Current Address: </span> {userDetails.address}</p>
                <p><span>D.O.B: </span> {userDetails.dob}</p>
                <p><span>State Of Origin: </span> {userDetails.soo}</p>
                {userDetails.role == 'student' && <p><span>Number Of Courses Registered: </span> {userDetails && userDetails.courses.length}</p>}
                {userDetails.role == 'teacher' && <p><span>{`Lecturer ${userDetails.firstName}'s Courses`}: </span> {`${userDetails.department}`} </p>}
            </div>

        </ProfileBox>
    )

    const renderAcademicRecords = [
        <AcadsBox>
            <DataTableAcademics fetchAllStudents={fetchAllStudents} setUser={setUser} user={user} showBtn={true} tableHeading={tableAcademics} tableData={userDetails} />
        </AcadsBox>

    ]

    const tabContent = [
        { title: 'Profile', content: renderProfile },
        (userDetails.role === 'student' && { title: 'Academic Records', content: renderAcademicRecords })
    ]


    const deleteUser = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {
            const { data } = await axios.delete(`http://localhost:4000/private/admin/delete-user/${userDetails._id}`, config);
            if (data.success === true) {
                alert(data.data)
                history.goBack();
            }

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <ContentWrapper>
            <ContentContainer>
                <div className='details-adjust'>
                    <div className='flex items-center justify-between py-3'>
                        <button onClick={() => history.goBack()}><ArrowLeft size={20} color="#08546d" weight="bold" /></button>
                        <button className='danger-btn' onClick={() => setIsModalOpen(!isModalOpen)}>Delete</button>
                    </div>

                    <AnimatePresence>
                        {isModalOpen &&
                            <DeleteUserModal>
                                <DeleteUserModalContainer
                                    variants={zoomOutVariants}
                                    initial="initial"
                                    animate="final"
                                    exit="exit"
                                >
                                    <h1> Are you sure you want to delete <span>{userDetails.firstName} {userDetails.lastName}</span> ?. This action cannot be undone!</h1>
                                    <div>
                                        <button onClick={() => setIsModalOpen(!isModalOpen)}>Cancel</button>
                                        <button onClick={deleteUser}>Delete</button>
                                    </div>
                                </DeleteUserModalContainer>
                            </DeleteUserModal>
                        }
                    </AnimatePresence>

                    <Tabs active={0}>
                        {tabContent.map((tab, idx) => (
                            <Tabs.TabPane key={`Tab ${idx}`} tab={tab.title} >
                                {tab.content}
                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                </div>
            </ContentContainer>
            
            <AnimatePresence>
                {isZoomed &&
                    <FullDisplay >
                        <Close>
                            <X size={30} color="#e8eaed" weight="bold" onClick={() => setIsZoomed(!isZoomed)} />
                        </Close>
                        <ImageBox
                            variants={zoomOutVariants}
                            initial="initial"
                            animate="final"
                            exit="exit"
                            ref={imageBoxRef}>
                            <img src={userDetails.pic} alt="Profile Image" />
                        </ImageBox>
                    </FullDisplay>
                }
            </AnimatePresence>
        </ContentWrapper>
    )
};


const ProfileBox = styled.div`
 background-color: white;
 width: 100%;
 padding:0 0 20px 0;
 border-radius: 6px;
 margin-top: 20px;


 & > div:nth-of-type(1) {
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    padding:10px 20px;
    color: #fff !important;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
 }
 & > div:nth-of-type(2) { margin-top: 20px; padding:0 20px;}
 & div > p { line-height: 40px;}
 & div > p > span {  font-weight: 900;}
 & > div { display: grid; grid-template-columns:  repeat(2, 1fr);}

 @media screen and (max-width: 480px){
    & > div { grid-template-columns: 1fr;}
    & > div:nth-of-type(2) { margin-top: 10px; padding:0 8px;}
    & div > p { line-height: 33px; font-size:14px;}

    & > div:nth-of-type(1) {
        display: grid; grid-template-columns:  repeat(2, 1fr); align-items:center ;
        & > div > p { font-size:14px; white-space: nowrap;}
        padding:10px;
 }
}
`

const AcadsBox = styled.div`
    margin-top: 20px;
`


const DeleteUserModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #00000076;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    & > h1 > span { color: cyan; }
    
`

const DeleteUserModalContainer = styled(motion.div)`
    background: #19262F;
    max-width: 350px;
    padding:20px;
    border-radius: 6px;
    color:#fff;

    @media screen and (max-width: 380px){
        font-size: 13px;
    }
    @media screen and (max-width: 380px){
        margin:0 15px ;
    }
   
    & > div {  margin-top:25px; display: flex; align-items: center; justify-content: space-between;}
    & > div > button { padding:3px 10px; border-radius: 6px; }
    & > div > button:nth-of-type(1) { background: cyan; color: #19262F; }
    & > div > button:nth-of-type(2) {background: red; color: #fff;}
    
`

export default UserDetails;