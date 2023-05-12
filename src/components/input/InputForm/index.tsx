import { UseFormRegisterReturn, FieldError } from 'react-hook-form/dist/types';
import { StyledInputBox } from '../style'


interface iInputBoxProps {
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export const InputBox = ({
  label,
  type,
  register,
  error,
}: iInputBoxProps) => {
  return (
    <StyledInputBox error={error}>
      <input type={type} {...register} placeholder="placeholder" />
      <label htmlFor={type}>{label}</label>
      {error && <span>{error.message}</span>}
    </StyledInputBox>
  );
};