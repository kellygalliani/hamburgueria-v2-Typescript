import styled, { css } from 'styled-components'

interface iStyledButtonProps{
    color?: "primary" | "grey";
    buttonType: "big" | "small" | "buy" | "cart_remove";
    disabled?: boolean;
}

export const StyledButton = styled.button <iStyledButtonProps>`

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    padding: 0, 22px;
    
    ${({color}) => {
        switch(color){
            case "primary":
                return css`
                    background-color: var(--Color-primary);
                    border: 2px solid var(--Color-primary);
                    color: var(--Grey-0);
                    
                    &:hover{
                        background-color: var(--Color-primary-50);
                        border: 2px solid var(--Color-primary-50)
                    }
                    &:disabled{
                        background-color: var(--Grey-100);
                        border: 2px solid var(--Grey-100);
                        color: var(--Grey-300);
                        cursor: default;
                    }
                `
            case "grey":
                return css`
                    background-color: var(--Grey-100);
                    border: 2px solid var(--Grey-100);
                    color: var(--Grey-300);
                    
                    &:hover{
                        background-color: var(--Grey-300);
                        border: 2px solid var(--Grey-300);
                        color: var(--Grey-100);
                    }
                ` 
        }
    }}

    ${({buttonType}) => {
        switch(buttonType){
            case "big":
                return css`
                    padding: 0px 22px;
                    width: 100%;
                    height: 50px;
                `
            case "small":
                return css` 
                    padding: 0px 16px;
                    max-width: 106px;
                    height: 35px;
                `
            case "buy":
                return css` 
                    padding: 0px 20px;
                    width: 106px;
                    height: 40px;
                    background: #27AE60;
                    border: 2px solid #27AE60;
                    border-radius: 8px;
                    color: #FFFFFF;

                    &:hover{
                        background-color: #93D7AF;
                        border: 2px solid #93D7AF;
                    }
                `
            case "cart_remove":
                return css` 
                    padding: 0px 20px;
                    width: 100%;
                    height: 60px;
                    background: #E0E0E0;
                    border: 2px solid #E0E0E0;
                    font-weight: 600;
                    font-size: 16px;
                    color: #828282;

                    &:hover{
                        background: #828282;                  
                        border: 2px solid #828282;
                        color: #E0E0E0;
                    }
                `
        }
    }}
`