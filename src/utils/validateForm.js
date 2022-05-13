import * as Yup from 'yup';
import moment from "moment"


export const validate = Yup.object({
    firstName: Yup.string().max(30, 'Must be 30 characters or less').required('firstname is required'),
    lastName: Yup.string().max(30, 'Must be 30 characters or less').required('lastname is require'),
    email: Yup.string().email('Email is invalid').required('email is required'),
    phone: Yup.string().min(10, 'phone number too short').max(15, 'phone number too long').required("phone is required"),
    dob: Yup.string()
        .required("DOB is Required")
        .test("DOB", "You must be above 10 years", (value) => { return moment().diff(moment(value), "years") >= 1; }),
    address: Yup.string().required('address is required'),
    soo: Yup.string().required('field cannot be empty'),
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('confirm password is required'),
})


export const validateProfile = Yup.object({
    firstName: Yup.string().max(30, 'Must be 30 characters or less').required('firstname is required'),
    lastName: Yup.string().max(30, 'Must be 30 characters or less').required('lastname is require'),
    email: Yup.string().email('Email is invalid').required('email is required'),
    phone: Yup.string().min(10, 'phone number too short').max(15, 'phone number too long').required("phone is required"),
    dob: Yup.string()
        .required("DOB is Required")
        .test("DOB", "You must be above 10 years", (value) => { return moment().diff(moment(value), "years") >= 1; }),
    address: Yup.string().required('address is required'),
    soo: Yup.string().required('field cannot be empty'),

})

export const validateCreateTeacher = Yup.object({
    firstName: Yup.string().max(30, 'Must be 30 characters or less').required('firstname is required'),
    lastName: Yup.string().max(30, 'Must be 30 characters or less').required('lastname is require'),
    email: Yup.string().email('Email is invalid').required('email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('confirm password is required'),

})


export const validateScore = Yup.object({
       score: Yup.number()
      .required()
      .moreThan(-1, 'score should not be less than zero')
      .lessThan(101, "invalid score range"),

})

export const validateChangePassword = Yup.object({
    newPassword: Yup.string().min(6, 'Password must be at least 6 charaters').required('password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Password must match').required('confirm password is required'),
})