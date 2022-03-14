import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContentContainer, ContentWrapper } from "../../assets/css/GlobalStyled";
import TextField from '../../components/TextField';
import { Formik, Form } from 'formik';
import { validate } from '../../utils/validateForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { facultyArr, courseArr } from '../../utils/data';



const Teachers = ({ user }) => {

    return (
        <ContentWrapper>
            <ContentContainer>
                <div>
                   Teachers
                </div>
            </ContentContainer>
        </ContentWrapper>
    )
};


export default Teachers;