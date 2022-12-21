import { FieldError } from "react-hook-form/dist/types/errors";
import styled, {css} from "styled-components";

interface iStyledInputProps{
    error?: FieldError;
}

export const StyledInputBox = styled.fieldset`
    display: flex;
    flex-direction: column;
    label{
        position: relative;
        width: fit-content;
        padding: 0 3px;
        background-color: #fff;
        top: 10px;
        left: 15px;

        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #999999;
    }    
`
