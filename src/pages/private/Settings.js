import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr } from '../../utils/data';



const Settings = ({ user }) => {

    return (
        <ContentWrapper>
            <ContentContainer>
                <div>
                   Settings
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};


export default Settings;