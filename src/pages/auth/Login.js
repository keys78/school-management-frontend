import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../components/TextField';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContainer, AuthWrapper, ItemsWrapper } from '../../assets/css/GlobalStyled';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import { ToastContainer, toast } from 'react-toastify';

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
    <AuthWrapper>
      <ToastContainer />
      <div className='auth-page-adjust'>
        <img onClick={() => history.push('/')} className='w-48 mx-auto mb-8 cursor-pointer' src={'e-school.png'} alt="logo" />
        <AuthContainer>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
              const config = {
                header: {
                  "Content-Type": "application/json",
                },
              };

              try {
                const { data } = await axios.post(
                  "http://localhost:4000/auth/login",
                  { ...values },
                  config
                );

                localStorage.setItem("authToken", data.token);
                history.push("/dashboard");
              } catch (error) {
                toast.error(error.response.data.error);
               
              }
            }}
          >
            {formik => (
              <ItemsWrapper>
                {loading && 'Loading...'}
                {error && <span className="error-message">{error}</span>}
                <h1>Login</h1>
                <Form>
                  <div>
                    <TextField label={'Email'} name={'email'} type={'email'} />
                  </div>
                  <div className='relative'>
                    <TextField label={'Password'} name={'password'} type={'password'} />
                    <span onClick={() => history.push('/forgotpassword')} className='absolute top-0 right-0  text-gray-200 text-sm underline cursor-pointer '>Forgot Password</span>
                  </div>
                  <Button type="submit" text={'Login'} padding={'py-2'} margin={'my-4'} color={'text-white'} width={'w-full'}/>
                </Form>
                <div  className='text-center text-gray-200 text-sm'>
                  Are you a new student? <span onClick={() => history.push('/confirm-regno')}>Register Here</span>
                </div>
                <Toast />
              </ItemsWrapper>
            )}
          </Formik>
        </AuthContainer>
      </div>
    </AuthWrapper>
  )
}




export default Login;