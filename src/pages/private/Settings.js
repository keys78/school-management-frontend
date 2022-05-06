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
        <ChangePasswordWrapper>
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
                            <div>
                                <TextField label={'Old password'} name={'password'} type={'password'} />
                            </div>
                            <div>
                                <TextField label={'New password'} name={'newPassword'} type={'password'} />
                            </div>
                            <div>
                                <TextField label={'Confirm new password'} name={'confirmPassword'} type={'password'} />
                            </div>
                            <div>
                                <button type='submit'>Change Password</button>
                            </div>

                        </Form>
                    </div>
                )}
            </Formik>
        </ChangePasswordWrapper>
    ]

    const notificationsTab = [<div>You have no new notifications</div>]
    const supportTab = [
        <div>
            <h1>Having Troubles ..?</h1>
            <p className='settings-links'>Contact us at <a href="mailto: rahzy24@gmail.com">rahzy24@gmail.com</a>&nbsp;or place a call to <a href="tel:08108243267">08108243267</a>
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
                    <h1 className="profile-header">Settings</h1>
                    <Tabs>
                        {tabContent.map((tab, idx) => (
                            <Tabs.TabPane key={`Tab ${idx}`} tab={tab.title} >
                                <div className='bg-white mt-4 pt-2 sm:pb-40 pb-8 sm:px-2 px-0 rounded-2xl'>
                                    {tab.content}
                                </div>

                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};


const ChangePasswordWrapper = styled.div`
    background: #19262F;
    max-width: 500px;
    padding: 25px 20px;
    border-radius: 8px;
    /* margin-top: 30px; */

    & form > div:nth-of-type(4) { text-align: right; }
    & form > div > button { color: red; color: white; border-radius: 6px; background: red; padding: 5px 10px;  text-align: right; }
`

export default Settings;