import React from 'react'
import { UseFormRegisterReturn, FieldError } from 'react-hook-form/dist/types';
import { StyledInputBox } from '../style'
import { StyledFieldError, StyledInput } from './StyledFieldError';

interface iInputBoxProps{
    label: string;
    type: "text" | "email" | "password";
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
}

export const InputBox = ({label, type, placeholder, register, error}:iInputBoxProps) => {
  return (
    <StyledInputBox>
        <label htmlFor={type}>{label}</label>
        <StyledInput type={type} placeholder={placeholder} {...register} error={error}/>
        {error && <StyledFieldError>{error.message}</StyledFieldError>}
    </StyledInputBox>
  )
}
