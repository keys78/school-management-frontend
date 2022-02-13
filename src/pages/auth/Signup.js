import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../components/TextField';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import regLogo from "../../assets/images/register-logo.png"
import moment from "moment"

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    const validate = Yup.object({
        firstName: Yup.string().max(30, 'Must be 30 characters or less').required('firstname is required'),
        lastName: Yup.string().max(30, 'Must be 30 characters or less').required('lastname is require'),
        email: Yup.string().email('Email is invalid').required('email is required'),
        // phone: Yup.string().max(15, 'phone number is invalid').required('phone number is required'),
        phone: Yup.string().min(10, 'phone number too short').max(15, 'phone number too long').required("phone is required"),

        dob: Yup.string()
            .required("DOB is Required")
            .test("DOB", "Please choose a valid date of birth", (value) => { return moment().diff(moment(value), "years") >= 10; }),
        address: Yup.string().required('address is required'),
        soo: Yup.string().required('field cannot be empty'),

        password: Yup.string().min(6, 'Password must be at least 6 charaters').required('password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('confirm password is required'),
    })


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
                        confirmPassword: ''
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        axios.post('https://61879aaf057b9b00177f9a1b.mockapi.io/users', values)
                            .then(res => {
                                res ? navigate('/dashboard') : setLoading(true)
                            })
                            .catch((error) => {
                                console.log(error)
                                setError(true)
                                setLoading(false)
                            })
                    }}
                >
                    {formik => (
                        <div>
                            {loading && 'Loading...'}
                            {error && <div>A mighty error has occured...lol </div>}
                            <h1 className="">Registration Form</h1>
                            <Form>
                                <FieldsWrapper>
                                    <div className=''>
                                        <TextField label={'First Name'} name={'firstName'} type={'text'} />
                                    </div>
                                    <div className=''>
                                        <TextField label={'Last Name'} name={'lastName'} type={'text'} />
                                    </div>
                                    <div className='col-span-2'>
                                        <TextField label={'Email'} name={'email'} type={'email'} />
                                    </div>
                                    <div className=''>
                                        <TextField label={'Phone Number'} name={'phone'} type={'text'} />
                                    </div>
                                    <div className=''>
                                        <TextField label={'Date OF Birth'} name={'dob'} type={'date'} />
                                    </div>


                                    <div className=''>
                                        <TextField label={'Address'} name={'address'} type={'text'} />
                                    </div>
                                    <div className=''>
                                        <TextField label={'State OF Origin'} name={'soo'} type={'text'} />
                                    </div>

                                    <div className=''>
                                        <TextField label={'Faculty'} name={'password'} type={'password'} />
                                    </div>
                                    <div className=''>
                                        <TextField label={'Department'} name={'password'} type={'password'} />
                                    </div>

                                    <div className=''>
                                        <TextField label={'Password'} name={'password'} type={'password'} />
                                    </div>
                                    <div className=''>
                                        <TextField label={'Confirm Password'} name={'confirmPassword'} type={'password'} />
                                    </div>

                                    <button>Register</button>


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
`

const SignupContainer = styled.section`
    margin-top: 70px;
    padding: 10px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    /* box-shadow:  5px 5px 27px var(--greyLight-2),
    -5px -5px 27px var(--greyLight-2); */

    box-shadow: var(--greyLight-2) 0px 1px 4px;

    h1 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 30px;
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

    & > button {
        width: 100%;
        padding: 5px 0;
        color: white;
        background-color: #1b1b1b;
        border: 1px solid orange;
    }

    /* &  div:nth-of-type(1) { grid-column: span 1.5 / span 3; }
    &  div:nth-of-type(2) { grid-column: span 1.5 / span 3; } */
`


export default SignUp