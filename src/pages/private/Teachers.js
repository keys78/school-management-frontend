import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper, CustomSelect } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form, Field } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, tableHeading } from '../../utils/data';
import { DataTable } from '../../components/DataTable';
import Button from '../../components/Button';



const Teachers = ({ setUser, searchTerm, setSearchTerm }) => {
    const history = useHistory()
    const [data, setData] = useState([])
    const [faculty, setFacu] = useState('')
    const [department, setDep] = useState('')
    const [loading, setLoading] = useState(false)
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
            const { data } = await axios.get("http://localhost:4000/private/admin/teachers", config);
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
            <ContentContainer>
                <div>
                    <div className='flex items-center justify-between'>
                        <h1>Lecturers</h1>
                        <button onClick={() => setIsOpen(!isOpen)}>Register Lecturer</button>
                    </div>
                    <div>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                gender: '',

                            }}
                            validationSchema={validate}
                            onSubmit={async (values, { resetForm }) => {

                                const config = {
                                    header: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
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
                                        fetchData();
                                        
                                    


                                    if (data.success === true) {
                                        // const { data: data_1 } = await axios.get(`http://localhost:4000/private/admin/teachers`, config);
                                        alert(`${data?.data} is now a teacher`)
                                        setIsOpen(false)
                                        
                                    }
                                   
                                    // setUser(data_1)

                                } catch (error) {
                                    setError(error.response.data.error);
                                    setTimeout(() => {
                                        setError("");
                                    }, 5000);
                                }
                                resetForm();
                            }}
                        >
                            {formik => (
                                <div>


                                    {isOpen &&
                                        <AddTeacherModal>
                                            {error && <span className="error-message">{error}</span>}
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

                                                    <Field component="select" name="gender" placeholder={'Select Options'}>
                                                        <option value="" disabled>Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </Field>

                                                    <div className='flex items-center py-4'>
                                                        <CustomSelect name="" id="" onChange={(e) => { const x = e.target.value; setFacu(x) }}>
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

                                                    {/* <button type='submit'>Register</button> */}
                                                    <Button type="reset" onClick={() => setIsOpen(false)} reset text={'Cancel'} width={'w-full'} background={'bg-red-500'} />
                                                    <Button type={'submit'} text={'Register Lecturer'} width={'w-full'} color='text-white' padding={'py-2'} />
                                                </FieldsWrapper>
                                            </Form>
                                        </AddTeacherModal>

                                    }
                                </div>
                            )}
                        </Formik>
                    </div>

                    <br />
                    <br />
                    <DataTable
                        tableData={data}
                        tableHeading={tableHeading}
                        url={"http://localhost:4000/private/admin/teachers"}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        data={data}
                        setData={setData}
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
    padding-left: 210px;
    z-index: 9;
    
`

const FieldsWrapper = styled.div`
    background: #19262F;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    min-width: 450px;
    padding:20px;
    border-radius: 6px;
    gap: 6px;

    & > div:nth-child(4)  { grid-column: span 2 / span 2; gap:10px; }
    /* & > button {grid-column: span 2 / span 2; gap:10px; }  */
     /* background: linear-gradient(to right, #44a08d, #093637); */
    
`


export default Teachers;