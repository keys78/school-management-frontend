import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../components/TextField';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AuthContainer, AuthWrapper, ItemsWrapper } from '../../assets/css/GlobalStyled';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import { pageAnimation } from '../../utils/Animations';

const ForgotPassword = ({ match }) => {
  const history = useHistory();
  const [success, setSuccess] = useState(false);


  const validate = Yup.object({
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('confirm password is required'),
  })


  return (
    <AuthWrapper>
      <div>
        <img onClick={() => history.push('/')} className='w-48 mx-auto mb-8 cursor-pointer' src={'e-school.png'} alt="logo" />
        <AuthContainer
         variants={pageAnimation}
         initial="hidden"
         animate="visible"
         exit="exit"
        >
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validate}
            onSubmit={async (values, { resetForm }) => {
              const config = {
                header: {
                  "Content-Type": "application/json",
                },
              };

              try {
                const { data } = await axios.put(
                  `/auth/resetpassword/${match.params.resetToken}`,
                  { ...values },
                  config
                );

                toast.success(data.data)
                setSuccess(!success)
                alert(data.data)
              } catch (error) {
                toast.error(error.response.data.error);
              }
              resetForm();
            }}
          >
            {formik => (
              <ItemsWrapper>
                {success && (
                  <span className="success-message">
                    {success} <Link to="/login">Login</Link>
                  </span>
                )}
                <h1>Reset Password</h1>
                <span className="text-xs mb-12">
                </span>
                <Form>
                  <div>
                    <TextField label={'Password'} name={'password'} type={'password'} />
                  </div>
                  <div>
                    <TextField label={'Confirm Password'} name={'confirmPassword'} type={'password'} />
                  </div>
                  <Button type="submit" text={'RESET'} padding={'py-2'} margin={'my-4'} color={'text-white'} width={'w-full'}/>
                </Form>
              </ItemsWrapper>
            )}
          </Formik>
        </AuthContainer>
      </div>
    </AuthWrapper>
  )
}




export default ForgotPassword;