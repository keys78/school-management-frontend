import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../components/TextField';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContainer, AuthWrapper, ItemsWrapper } from '../../assets/css/GlobalStyled';
import Button from '../../components/Button';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [error, setError] = useState(false)
  const history = useHistory();
  const [success, setSuccess] = useState("");


  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('email is required'),
  })


  return (
    <AuthWrapper>
      <div>
        <img onClick={() => history.push('/')} className='w-48 mx-auto mb-8 cursor-pointer' src={'e-school.png'} alt="logo" />
        <AuthContainer>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validate}
            onSubmit={async (values, { resetForm }) => {
              const config = {
                header: {
                  "Content-Type": "application/json",
                },
              };

              try {
                const { data } = await axios.post(
                  "http://localhost:4000/auth/forgotpassword",
                  { ...values },
                  config
                );

                toast.success(data.data);
              } catch (error) {
                toast.error(error.response.data.error);
              }
              resetForm();
            }}
          >
            {formik => (
              <ItemsWrapper>
                <h1>Request Pasword Reset</h1>
                <span style={{lineHeight:'17px'}} className="text-xs mb-12">
                  Please enter the email address you registered your account with. You will recieve a password reset confirmation
                </span>
                <Form>
                  <div className='mt-6'>
                    <TextField label={'Email'} name={'email'} type={'email'} />
                  </div>
                  <Button type="submit" text={'Send Reset Instructions'} padding={'py-2'} margin={'my-4'} color={'text-white'} width={'w-full'}/>
                </Form>

                <p className='cursor-pointer text-right' onClick={() => history.push('/login')}> <span>~ login </span></p>
              </ItemsWrapper>
            )}
          </Formik>
        </AuthContainer>
      </div>
    </AuthWrapper>
  )
}




export default ForgotPassword;