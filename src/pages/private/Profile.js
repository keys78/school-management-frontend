import React from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import useAxiosFetch from '../../utils/useAxiosFetch';


const Profile = ({ user, setError, error }) => {
  const history = useHistory()
  return (
    <ContentWrapper>
      <ContentContainer>
        <ProfileBox>
          <Formik
            initialValues={{
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              dob: '',
              phone: '',
              address: '',
              soo: '',

            }}
            validationSchema={validate}
            onSubmit={async (values) => {

              const config = {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
              };

              try {
                await axios.post("http://localhost:4000/private/profile", { ...values, user }, config);
                alert('user has been updatd')
              } catch (error) {
                console.log(error)
              }
            }}
          >
            {formik => (
              <div>
                {error && <span className="error-message">{error}</span>}
                <h1 className="">My Profile</h1>
                <Form>
                  <div>
                    <TextField label={'First Name'} name={'firstName'} type={'text'} />
                  </div>
                  <div>
                    <TextField label={'Last Name'} name={'lastName'} type={'text'} />
                  </div>
                  <div>
                    <TextField label={'Email'} name={'email'} type={'email'} disabled />
                  </div>
                  <button type='submit'>Updatei</button>
                </Form>

              </div>
            )}
          </Formik>
        </ProfileBox>
      </ContentContainer>
    </ContentWrapper>
  )
}

const ProfileBox = styled.div`
  padding:12px;
  height: 400px;
`

export default Profile;