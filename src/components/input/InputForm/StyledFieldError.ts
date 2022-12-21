import { FieldError } from "react-hook-form";
import styled, { css } from "styled-components";

interface iStyledInputProps{
    error?: FieldError;
}

export const StyledInput = styled.input<iStyledInputProps>`

    width: 100%;
    border: 2px solid var(--Grey-600);
    border-radius: 8px;
    padding: 21px 12px;
    
    :focus{
        outline-color: var(--Grey-600);
    }
    ${({error}) => {
        if(error){
            return css`
                width: 100%;
                border-radius: 8px;
                padding: 21px 12px;
                border: 2px solid var(--Color-secondary);
                :focus{
                    outline-color: var(--Color-secondary);
                }
            `
        }
    }}  
    
`
export const StyledFieldError = styled.span`
   padding-top: 8px;
   font-weight: 500;
   color: var(--Color-secondary);
    
`
