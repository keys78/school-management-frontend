import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <Label htmlFor={field.name}>{label}</Label>
      <div className='flex items-center gap-4 '>
      <Input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="on"
      />
       <p>Icon</p>
      </div>
     
     
      <ErrorMessage component="p" name={field.name} className="error" />
    </div>
  )

};

const Label = styled.label`
   font-size: 14px;
   display:block;
   color: #96A0AE;
   font-weight: 400;
   margin-bottom: 4px;
`
const Input = styled.input`
  /* background: #E2E6ED; */
  /* border: 1px solid #d8dbe0; */
  /* color: #646F81; */
  padding: 6px 7px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  margin-bottom: 6px;
`

export default TextField;