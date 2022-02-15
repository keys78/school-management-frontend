import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../components/TextField';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import loginLogo from "../../assets/images/books.png"
import Button from '../../components/Button';

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory();
  

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/dashboard");
    }
  }, [history]);


  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('password is required'),
  })


  return (
    <LoginWrapper>
      <LoginContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validate}
          onSubmit={ async (values) => {
            const config = {
              header: {
                "Content-Type": "application/json",
              },
            };
        
            try {
              const { data } = await axios.post(
                 "http://localhost:4000/auth/login",
                {...values },
                config
              );
        
              localStorage.setItem("authToken", data.token);
              console.log(data.token)
        
              history.push("/dashboard");
            } catch (error) {
              setError(error.response.data.error);
              setTimeout(() => {
                setError("");
              }, 5000);
            }
          }}
        >
          {formik => (
            <div>
              {loading && 'Loading...'}
              {error && <span className="error-message">{error}</span>}
              <h1>Login</h1>
              <p>Sign In to your account</p>
              <Form>
                <FieldsWrapper>
                  <div >
                    <TextField label={'Email'} name={'email'} type={'email'} />
                  </div>
                  <div>
                    <TextField label={'Password'} name={'password'} type={'password'} />
                  </div>
                  <Button type="submit" text={'Login'} />
                </FieldsWrapper>
              </Form>
              <div className='text-center'>
                Are you a new student? <Link to="/confirm-regno">Register Here</Link>
              </div>
            </div>
          )}
        </Formik>
        <div className='w-5/12 flex items-center justify-evenly'>
          <img className="md:w-8/12 w-11/12" src={loginLogo} alt="banner" />
        </div>
      </LoginContainer>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ebedef;
    height: 100vh;
`

const LoginContainer = styled.section`
    margin-top: -80px;
    padding:25px 15px 25px 30px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    background: #fff;

    box-shadow: var(--greyLight-2) 0px 1px 4px;

    h1 {
        font-size: 30px;
        color: #3C4B64;
    }

    p{
      margin-bottom: 30px;
    }
`
const FieldsWrapper = styled.div`

`


export default Login;