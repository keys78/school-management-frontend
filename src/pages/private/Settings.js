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
            onSubmit={async (values, { resetForm }) => {

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
                resetForm();
            }}
        >
            {formik => (
                <div>
                    {error && <span className="error-message">{error}</span>}

                    <Form>
                        {/* <FieldsWrapper> */}
                        <div>
                            <TextField label={'Old password'} name={'password'} type={'password'} />
                        </div>
                        <div>
                            <TextField label={'New password'} name={'newPassword'} type={'password'} />
                        </div>
                        <div>
                            <TextField label={'Confirm new password'} name={'confirmPassword'} type={'password'} />
                        </div>

                        <button type='submit'>Register</button>
                        {/* </FieldsWrapper> */}
                    </Form>
                </div>
            )}
        </Formik>
    ]
    const notificationsTab = ['you have no new notifications']
    const supportTab = [
        <div>
            <h1>Having Troubles ..?</h1>
            <p>Contact us at <a href="mailto: rahzy24@gmail.com">rahzy24@gmail.com</a>&nbsp;or place a call to <a href="tel:08108243267">08108243267</a>
            </p>
        </div>

    ]

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