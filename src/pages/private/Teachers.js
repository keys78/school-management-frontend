import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr, tableHeading } from '../../utils/data';
import useAxiosFetch from '../../utils/useAxiosFetch'
import DataTable from '../../components/DataTable';



const Teachers = () => {
    const history = useHistory()
    const [allTeachers, setAllTeachers] = useState('')
    const [faculty, setFacu] = useState('')
    const [department, setDep] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchAllTeachers = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get("http://localhost:4000/private/admin/teachers", config);
                setAllTeachers(data);
            } catch (error) {
                console.log(error)
            }
        };

        fetchAllTeachers();
    }, []);


    // const renderAllTeachers = allTeachers && allTeachers.map((val, i) => (
    //     <div key={i}>
    //         <p>{val.firstName}
    //             {val.lastName
    //             } {val.email}
    //         </p>
    //     </div>
    // ))


    return error ? (
        <span className="error-message">{error} <Link to="/login">Login</Link></span>
    ) : (
        <ContentWrapper>
            <ContentContainer>
                <div>
                    <button onClick={() => setIsOpen(!isOpen)}>Register Teacher</button>
                    <div>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',

                            }}
                            validationSchema={validate}
                            onSubmit={async (values) => {

                                const config = {
                                    header: {
                                        "Content-Type": "application/json",
                                    },
                                }

                                try {
                                    const { data } = await axios.post("http://localhost:4000/auth/register-teacher",
                                        {
                                            ...values,
                                            level: `${department} lecturer`,
                                            faculty: faculty,
                                            department: department
                                        }

                                        , config);
                                    alert(`${data.firstName} is now a teacher`)
                                } catch (error) {
                                    setError(error.response.data.error);
                                    setTimeout(() => {
                                        setError("");
                                    }, 5000);
                                }
                                console.log(values)
                            }}
                        >
                            {formik => (
                                <div>
                                    {error && <span className="error-message">{error}</span>}

                                    {isOpen && <Form>
                                        <FieldsWrapper>
                                            <div>
                                                <TextField label={'First Name'} name={'firstName'} type={'text'} />
                                            </div>
                                            <div>
                                                <TextField label={'Last Name'} name={'lastName'} type={'text'} />
                                            </div>
                                            <div className='col-span-2'>
                                                <TextField label={'Email'} name={'email'} type={'email'} />
                                            </div>

                                            <div>
                                                <select name="" id="" onChange={(e) => { const x = e.target.value; setFacu(x) }}>
                                                    <option value="">Select Faculty</option>
                                                    {facultyArr.map(faculty =>
                                                        <option value={faculty.faculty}>{faculty.faculty}</option>
                                                    )}
                                                </select>

                                                <select onChange={(e) => { setDep(e.target.value) }}  >
                                                    <option value="">Select Department</option>
                                                    {faculty && facultyArr.find(y => y.faculty === faculty).departments.map(depts =>
                                                        <option value={depts.department}>{depts.department}</option>
                                                    )}
                                                </select>
                                            </div>
                                            <div>
                                                <TextField label={'Password'} name={'password'} type={'password'} />
                                            </div>
                                            <div>
                                                <TextField label={'Confirm Password'} name={'confirmPassword'} type={'password'} />
                                            </div>

                                            <button type='submit'>Register</button>


                                        </FieldsWrapper>
                                    </Form>
                                    }
                                </div>
                            )}
                        </Formik>
                    </div>

                    <br />
                    <br />
                    {allTeachers.length !== 0 ? (<DataTable tableData={allTeachers} tableHeading={tableHeading}/>) : (
                        <div> 'You have no new teacher on grrannd'</div>
                    )}
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};

const FieldsWrapper = styled.div`
    width: 300px;
`


export default Teachers;