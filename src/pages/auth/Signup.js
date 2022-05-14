import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '../../components/TextField';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { facultyArr, } from '../../utils/data';
import { validate } from '../../utils/validateForm';
import { AuthContainer, AuthWrapper, ItemsWrapper, CustomSelect } from '../../assets/css/GlobalStyled';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import { pageAnimation } from '../../utils/Animations';

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const [faculty, setFacu] = useState('')
    const [department, setDep] = useState('')



    return (
        <AuthWrapper className="signup-adjust">
            <div>
                <img onClick={() => history.push('/')} className='w-48 mx-auto mb-8' src={'e-school.png'} alt="logo" />
                <AuthContainer 
                large
                variants={pageAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
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
                            gender: '',

                        }}
                        validationSchema={validate}
                        onSubmit={async (values) => {

                            const config = {
                                header: {
                                    "Content-Type": "application/json",
                                },
                            }

                            const id = toast.loading("Signing In...")
                            try {
                                
                                const { data } = await axios.post("https://my-e-school-api.herokuapp.com/auth/register",
                                    {
                                        ...values,
                                        faculty: faculty,
                                        department: department
                                    }

                                    , config);
                                localStorage.setItem("authToken", data.token);
                                toast.update(id, {render: "Sign In Success", type: "success", isLoading: false, autoClose: 2000});
                                history.push("/dashboard");

                            } catch (error) {
                                toast.update(id, {render: error.response.data.error, type: "error", isLoading: false, autoClose: 2000});
                            }
                        }}
                    >
                        {formik => (
                            <ItemsWrapper>
                                {loading && 'Loading...'}
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
                                            <TextField label={'Phone Number'} name={'phone'} type={'number'} />
                                        </div>
                                        <div>
                                            <TextField label={'Date OF Birth'} name={'dob'} type={'date'} />
                                        </div>
                                        <div>
                                            <TextField label={'Address'} name={'address'} type={'text'} />
                                        </div>
                                        <div className='soo-adjust'>
                                            <TextField label={'State OF Origin'} name={'soo'} type={'text'} />
                                        </div>
                                        <section className="gender-class-s">
                                            <label className='gender-label' htmlFor="gender">Gender</label>
                                            <Field required label='Gender' component="select" name="gender" className="gender-class" placeholder={'Select Options'}>
                                                <option disabled value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </Field>
                                        </section>

                                        <div className='faculdep flex sm:gap-8 gap-4'>
                                            <label className='select-label' htmlFor="faculty">Faculty
                                                <CustomSelect required name="faculty" onChange={(e) => { const x = e.target.value; setFacu(x) }}>
                                                    <option value="">Select Faculty</option>
                                                    {facultyArr.map(faculty =>
                                                        <option value={faculty.faculty}>{faculty.faculty}</option>
                                                    )}
                                                </CustomSelect>
                                            </label>

                                            <label className='select-label' htmlFor="dept">Department
                                                <CustomSelect required name="dept" onChange={(e) => { setDep(e.target.value) }}  >
                                                    <option disabled value="">Select Department</option>
                                                    {faculty && facultyArr.find(y => y.faculty === faculty).departments.map(depts =>
                                                        <option value={depts.department}>{depts.department}</option>
                                                    )}
                                                </CustomSelect>
                                            </label>
                                        </div>
                                        <div>
                                            <TextField label={'Password'} name={'password'} type={'password'} />
                                        </div>
                                        <div>
                                            <TextField label={'Confirm Password'} name={'confirmPassword'} type={'password'} />
                                        </div>

                                        <input type="reset" className='reset-btn' />
                                        <Button type="submit" text={'Register'} background={'#04131D'} padding={'py-2'} color={'text-white'} />

                                    </FieldsWrapper>
                                </Form>
                                <div className='text-center text-gray-200 text-sm pt-2 pb-2'>
                                    Are you a returning student? <span onClick={() => history.push('/login')}>Log In</span>
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
    align-items: center;

    & > div:nth-child(1)  { grid-column: span 2 / span 4; }
    & > div:nth-child(2)  { grid-column: span 2 / span 4; }
    & > div:nth-child(6)  { grid-column: span 3 / span 4; }
    & > div:nth-child(7)  { grid-column: span 1 / span 4; }
    & > div:nth-child(8)  { grid-column: span 4 / span 4; }
    & > div:nth-child(9)  { grid-column: span 2 / span 4; }
    & > div:nth-child(10)  { grid-column: span 2 / span 4; }
    & > div:nth-child(11)  { grid-column: span 2 / span 4; }
    & > div:nth-child(12)  { grid-column: span 4 / span 4; }
    & > button  { grid-column: span 2 / span 4; margin-top:10px; }
    & > input  { grid-column: span 2 / span 4; margin-top:10px }

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(2, 1fr);
        gap: 0 10px;

        & > div:nth-child(1)  { grid-column: span 1 / span 2; }
        & > div:nth-child(2)  { grid-column: span 1 / span 2; }

        & > div:nth-child(6)  { grid-column: span 2 / span 2; }
        & > div:nth-child(7)  { grid-column: span 1 / span 2; }
        & > div:nth-child(8)  { grid-column: span 1 / span 2; }
        & > div:nth-child(9)  { grid-column: span 2 / span 2; }
        & > div:nth-child(10) { grid-column: span 2 /span 2; }
        & > div:nth-child(11) { grid-column: span 2 / span 2; }
        & > div:nth-child(12) { grid-column: span 2 / span 2; }
        & > button  { grid-column: span 1 / span 2; }
        & > input  { grid-column: span 1 / span 2; }
        }
`

export default SignUp;