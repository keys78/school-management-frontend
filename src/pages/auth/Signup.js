import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../components/TextField';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import regLogo from "../../assets/images/register-logo.png"
import { facultyArr,  courseArr } from '../../utils/data';
import { validate } from '../../utils/validateForm';

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory();

    const [faculty, setFacu] = useState('')
    const [department, setDep] = useState('')
    const [courses, setCourses] = useState('')

   


    return (
        <SignUpWrapper>

            <SignupContainer>

                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        dob: '',
                        email: '',
                        phone: '',
                        address: '',
                        soo: '',
                        password: '',

                    }}
                    validationSchema={validate}
                    onSubmit={async (values) => {
                        // e.preventDefault();

                        const config = {
                            header: {
                                "Content-Type": "application/json",
                            },
                        }

                        try {
                            const { data } = await axios.post("http://localhost:4000/auth/register",
                                {
                                    ...values,
                                    faculty: faculty,
                                    department: department
                                }

                                , config);
                            localStorage.setItem("authToken", data.token);
                            history.push("/dashboard");

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
                            {loading && 'Loading...'}
                            {error && <span className="error-message">{error}</span>}
                            <h1 className="">Registration Form</h1>
                            <Form>
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
                                        <TextField label={'Phone Number'} name={'phone'} type={'text'} />
                                    </div>
                                    <div>
                                        <TextField label={'Date OF Birth'} name={'dob'} type={'date'} />
                                    </div>
                                    <div>
                                        <TextField label={'Address'} name={'address'} type={'text'} />
                                    </div>
                                    <div>
                                        <TextField label={'State OF Origin'} name={'soo'} type={'text'} />
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
                            <div className='text-center'>
                                Are you a returning student? <Link to="/login">Log In</Link>
                            </div>
                        </div>
                    )}
                </Formik>
                <div className='w-6/12 flex items-center justify-evenly'>
                    <img className="md:w-8/12 w-11/12" src={regLogo} alt="banner" />
                </div>
            </SignupContainer>
        </SignUpWrapper>
    )
}

const SignUpWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ebedef;
    height: 100vh;
`

const SignupContainer = styled.section`
    margin-top: -80px;
    padding:25px 15px 25px 30px;
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    background: #fff;
    /* box-shadow:  5px 5px 27px var(--greyLight-2),
    -5px -5px 27px var(--greyLight-2); */

    box-shadow: var(--greyLight-2) 0px 1px 4px;

    h1 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 30px;
        color: #3C4B64;
    }


    /* box-shadow:  5px 5px 27px var(--greyLight-2),
    -5px -5px 27px var(--greyLight-2); */
`
const FieldsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 30px;

    & > div:nth-child(1)  { grid-column: span 2 / span 4; }
    & > div:nth-child(2)  { grid-column: span 2 / span 4; }
    & > div:nth-child(6)  { grid-column: span 3 / span 4; }
    & > div:nth-child(7)  { grid-column: span 1 / span 4; }
    & > div:nth-child(8)  { grid-column: span 2 / span 4; }
    & > div:nth-child(9)  { grid-column: span 2 / span 4; }
    & > div:nth-child(10)  { grid-column: span 2 / span 4; }
    & > div:nth-child(11)  { grid-column: span 2 / span 4; }
    & > div:nth-child(12)  { grid-column: span 4 / span 4; }

`


export default SignUp