import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate, validateChangePassword } from '../../utils/validateForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr } from '../../utils/data';
import Tabs from '../../components/Tabs';



const Settings = ({ user, error, setError }) => {

    const securityTab = [
        <Formik
            initialValues={{
                password: '',
                newPassword: '',

            }}
            validationSchema={validateChangePassword}
            onSubmit={async (values) => {

                const config = {
                    header: {
                        "Content-Type": "application/json",
                    },
                }

                try {
                    await axios.post(`http://localhost:4000/auth/changepassword/${user._id} `, { ...values, }, config);
                    alert(`password is updated`)
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
                    {error && <span className="error-message">{error}</span>}

                    <Form>
                        {/* <FieldsWrapper> */}
                        <div>
                            <TextField label={'New Password'} name={'newPassword'} type={'password'} />
                        </div>
                        <div>
                            <TextField label={'Old Password'} name={'password'} type={'password'} />
                        </div>
                        <div>
                            <TextField label={'Confirm Password'} name={'confirmPassword'} type={'password'} />
                        </div>

                        <button type='submit'>Register</button>
                        {/* </FieldsWrapper> */}
                    </Form>
                </div>
            )}
        </Formik>
    ]
    const notificationsTab = ['notfi']
    const supportTab = ['ssupppoty']

    const tabContent = [
        { title: 'Security', content: securityTab },
        { title: 'Notifications', content: notificationsTab },
        { title: 'Support', content: supportTab }
    ]

    return (
        <ContentWrapper>
            <ContentContainer>
                <div>
                    <Tabs>
                        {tabContent.map((tab, idx) => (
                            <Tabs.TabPane key={`Tab ${idx}`} tab={tab.title} >
                                {tab.content}
                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};


export default Settings;