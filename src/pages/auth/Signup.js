import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '../../components/TextField';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import regLogo from "../../assets/images/register-logo.png"
import { facultyArr, } from '../../utils/data';
import { validate } from '../../utils/validateForm';
import { AuthContainer, AuthWrapper, ItemsWrapper, CustomSelect } from '../../assets/css/GlobalStyled';
import Button from '../../components/Button';

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory();
    const [faculty, setFacu] = useState('')
    const [department, setDep] = useState('')



    return (
        <AuthWrapper>
            <div>
                <img className='w-48 mx-auto mb-8' src={'e-school.png'} alt="logo" />
                <AuthContainer large>
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
                            gender:'',

                        }}
                        validationSchema={validate}
                        onSubmit={async (values) => {

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
                            <ItemsWrapper>
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

                                        <Field component="select" name="gender" placeholder={'Select Options'}>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Field>

                                        <div className='flex gap-8'>
                                            <CustomSelect onChange={(e) => { const x = e.target.value; setFacu(x) }}>
                                                <option value="">Select Faculty</option>
                                                {facultyArr.map(faculty =>
                                                    <option value={faculty.faculty}>{faculty.faculty}</option>
                                                )}
                                            </CustomSelect>

                                            <CustomSelect onChange={(e) => { setDep(e.target.value) }}  >
                                                <option value="">Select Department</option>
                                                {faculty && facultyArr.find(y => y.faculty === faculty).departments.map(depts =>
                                                    <option value={depts.department}>{depts.department}</option>
                                                )}
                                            </CustomSelect>
                                        </div>
                                        <div>
                                            <TextField label={'Password'} name={'password'} type={'password'} />
                                        </div>
                                        <div>
                                            <TextField label={'Confirm Password'} name={'confirmPassword'} type={'password'} />
                                        </div>

                                        <Button
                                            type="reset" onClick={e => formik.resetForm()}
                                            reset text={'Reset'} padding={'py-0'} margin={'mb-4'} background={'bg-red-500'} />
                                        <Button type="submit" text={'Register'} background={'#04131D'} padding={'py-2'} margin={'mb-4'} color={'text-white'} />

                                    </FieldsWrapper>
                                </Form>
                                <div onClick={() => history.push('/login')} className='text-center text-gray-200 text-sm'>
                                    Are you a returning student? <span>Log In</span>
                                </div>
                            </ItemsWrapper>
                        )}
                    </Formik>
                </AuthContainer>
            </div>
        </AuthWrapper>
    )
}


const FieldsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 30px;

    & > div:nth-child(1)  { grid-column: span 2 / span 4; }
    & > div:nth-child(2)  { grid-column: span 2 / span 4; }
    & > div:nth-child(6)  { grid-column: span 3 / span 4; }
    & > div:nth-child(7)  { grid-column: span 1 / span 4; }
    & > div:nth-child(8)  { grid-column: span 4 / span 4; }
    & > div:nth-child(9)  { grid-column: span 2 / span 4; }
    & > div:nth-child(10)  { grid-column: span 2 / span 4; }
    & > div:nth-child(11)  { grid-column: span 2 / span 4; }
    & > div:nth-child(12)  { grid-column: span 4 / span 4; }
    & > button  { grid-column: span 2 / span 4; }

`


export default SignUp