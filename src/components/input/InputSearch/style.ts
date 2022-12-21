import styled from "styled-components";

export const StyledInputSearchBox = styled.fieldset`
    display: flex;
    height: 60px;
    flex-direction: column;
    border-radius: 8px;
    
    button{
        width: 53px;
        height: 40px;
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        position: absolute;
        top: 25%;
        right: 30px;
    }

    svg{
        font-weight: 900;
        font-size: 14px;
        color: #FFFFFF !important;
    }

    input{
        width: 100%;
        height: 60px;
        border: 2px solid var(--Grey-100);
        border-radius: 8px;
        padding: 21px 12px;
        
        :focus{
            outline-color: var(--Grey-300);
        }
    }
    @media (min-width: 900px){
        max-width: 365px;
        background: #FFFFFF;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        padding: 10px 10px 10px 15px;

        display: flex;
        flex-direction: row;
        align-items: center;
        button{
            position: initial;
        }
        input{
            border: none !important;
            width: 100%;
            height: 100%;
            border: 2px solid var(--Grey-100);
            border-radius: 8px;
            
        }
    }
    
    
`