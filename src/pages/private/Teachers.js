import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper, CustomSelect } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form, Field } from 'formik';
import { validateCreateTeacher } from '../../utils/validateForm';
import { modalVariantsVertical } from '../../utils/Animations';
import { AnimatePresence, motion } from 'framer-motion'
import {  Link } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, tableHeading } from '../../utils/data';
import { DataTable } from '../../components/DataTable';
import Button from '../../components/Button';
import BtnControls from '../../components/BtnControls';
import { PlusCircle } from 'phosphor-react';
import { toast } from 'react-toastify';
import { pageAnimation } from '../../utils/Animations';



const Teachers = ({ searchTerm, setSearchTerm }) => {
    const [data, setData] = useState([])
    const [faculty, setFacu] = useState('')
    const [department, setDep] = useState('')
    const [error, setError] = useState("")

    const [isOpen, setIsOpen] = useState(false)

    const fetchData = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {
            const { data } = await axios.get("https://my-e-school-api.herokuapp.com/private/admin/teachers", config);
            return setData(data);
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {


        fetchData();
    }, []);



    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <ContentWrapper>
            <ContentContainer
            variants={pageAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <div>
                    <div className='flex items-center justify-end'>
                        <div className=''>
                            <BtnControls type={'submit'} icon={<PlusCircle size={20} color="#61f5eb" weight="bold" />} text={'Register Lecturer'} onClick={() => setIsOpen(!isOpen)} />
                        </div>
                    </div>
                    <div>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                gender: '',

                                phone: '',
                                address: '',
                                soo: '',
                                dob: '',

                            }}
                            validationSchema={validateCreateTeacher}
                            onSubmit={async (values, { resetForm }) => {

                                const config = {
                                    header: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                                    },
                                }

                                try {
                                    const { data } = await axios.post("/auth/register-teacher",
                                        {
                                            ...values,
                                            level: `${department} lecturer`,
                                            faculty: faculty,
                                            department: department
                                        }

                                        , config);
                                    fetchData();

                                    if (data.success === true) {
                                        toast.success(`${data?.data} is now a staff`)
                                        setIsOpen(false)

                                    }


                                } catch (error) {
                                    toast.error(error.response.data.error);
                                }
                                resetForm();
                            }}
                        >
                            {formik => (
                                <div>
                                    <AnimatePresence>
                                        {isOpen &&
                                            <AddTeacherModal>
                                                {error && <span className="error-message">{error}</span>}
                                                <Form>
                                                    <FieldsWrapper
                                                        variants={modalVariantsVertical}
                                                        initial="initial"
                                                        animate="final"
                                                        exit="exit"
                                                    >
                                                        <div>
                                                            <TextField label={'First Name'} name={'firstName'} type={'text'} />
                                                        </div>
                                                        <div>
                                                            <TextField label={'Last Name'} name={'lastName'} type={'text'} />
                                                        </div>
                                                        <div className='col-span-2'>
                                                            <TextField label={'Email'} name={'email'} type={'email'} />
                                                        </div>

                                                        <div className='faculdep flex gap-8'>
                                                            <section className="gender-class-s -mb-6">
                                                                <label className='gender-label' htmlFor="gender">Gender</label>
                                                                <Field label='Gender' component="select" name="gender" className="gender-class" placeholder={'Select Options'}>
                                                                    <option disabled value="">Select gender</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                </Field>
                                                            </section>

                                                            <label className='select-label' htmlFor="faculty">Faculty
                                                                <CustomSelect name="faculty" onChange={(e) => { const x = e.target.value; setFacu(x) }}>
                                                                    <option disabled value="">Select Faculty</option>
                                                                    {facultyArr.map(faculty =>
                                                                        <option value={faculty.faculty}>{faculty.faculty}</option>
                                                                    )}
                                                                </CustomSelect>
                                                            </label>

                                                            <div className='dept-teacher-adjust'>
                                                                <label className='select-label' htmlFor="dept">Department
                                                                    <CustomSelect name="dept" onChange={(e) => { setDep(e.target.value) }}  >
                                                                        <option disabled value="">Select Department</option>
                                                                        {faculty && facultyArr.find(y => y.faculty === faculty).departments.map(depts =>
                                                                            <option value={depts.department}>{depts.department}</option>
                                                                        )}
                                                                    </CustomSelect>
                                                                </label>
                                                            </div>

                                                        </div>

                                                        <div>
                                                            <TextField label={'Password'} name={'password'} type={'password'} />
                                                        </div>
                                                        <div>
                                                            <TextField label={'Confirm Password'} name={'confirmPassword'} type={'password'} />
                                                        </div>

                                                        <button type='reset' onClick={() => setIsOpen(false)} className='cancel-btn'>Cancel</button>
                                                        <Button type={'submit'} text={'Register Lecturer'} width={'w-full'} color='text-white' padding={'py-2'} />
                                                    </FieldsWrapper>
                                                </Form>
                                            </AddTeacherModal>
                                        }

                                    </AnimatePresence>
                                </div>
                            )}
                        </Formik>
                    </div>

                    <DataTable
                        tableData={data}
                        tableHeading={tableHeading}
                        url={"https://my-e-school-api.herokuapp.com/private/admin/teachers"}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        data={data}
                        setData={setData}
                        tableTitle={'Lecturers'}
                    />
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};
const AddTeacherModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #00000076;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;

  
    
`

const FieldsWrapper = styled(motion.div)`
    background: #19262F;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items:center ;
    padding:20px;
    border-radius: 6px;
    gap: 6px;

    @media screen and (max-width: 600px) {
        margin:0 15px ;
        padding:14px;
    }

    & > div:nth-child(4)  { grid-column: span 2 / span 2; display:grid; grid-template-columns: repeat(3, 1fr !important)}
    & > div:nth-child(5) { grid-column: span 2 / span 2; }
    & > div:nth-child(6) { grid-column: span 2 / span 2; }
    & > button { margin-top:10px; }
    
`


export default Teachers;