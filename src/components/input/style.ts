import styled, {css} from 'styled-components';
import { FieldError } from "react-hook-form";

interface iStyledInputBoxProps {
    error?: FieldError;
  }

export const StyledInputBox = styled.fieldset<iStyledInputBoxProps>`
  position: relative;
  border: none;

  input {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    margin-bottom: 8px;

    ${({ error }) => {
      if (error) {
        return css`
          border: 2px solid var(--Color-secondary);

          :focus {
            outline-color: var(--Color-secondary);
          }
        `;
      } else {
        return css`
          border: 2px solid var(--Grey-100);
        `;
      }
    }}

    &:focus, &:not(:placeholder-shown) {
      outline: none;
      border-color: var(--Color-primary);
    }

    ::placeholder {
      color: transparent;
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: 0;
      transform: translateY(-50%);
      font-size: 12px;
      color: var(--Color-primary);
      border-color: var(--Color-primary);
    }
  }

  label {
    position: absolute;
    top: 42%;
    left: 12px;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 0 4px;
    font-size: 16px;
    color: #999999;
    pointer-events: none;
    transition: all 0.2s ease-in-out;

    ${({ error }) => {
      if (error) {
        return css`
          transform: translateY(calc(-42% - 8px)); 
        `;
      }
    }}
  }

  span {
    font-weight: 500;
    color: var(--Color-secondary);
  }
`;
