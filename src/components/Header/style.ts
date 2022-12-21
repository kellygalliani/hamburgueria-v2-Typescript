import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background: #F5F5F5;
    height: 80px;
    display: flex;
    align-items: center;

    div > div{
        display: flex;
        justify-content: space-between;
        width: 100%;

        img{
            width: 50%;
            max-width: 150px;
        }

        div{
            width: fit-content;
            display: flex;
            align-items: flex-end;
            gap: 20px;

            fieldset:nth-child(1){
                display: none;
            }
            @media (min-width: 900px){
                fieldset:nth-child(1){
                    display: flex;
                }
                svg:nth-child(2){
                    display: none;
                }
            }
            div:nth-child(3){
                display: flex;
                width: fit-content;
                position: relative;
                
                span {
                width: 20px;
                height: 24px;
                
                background: var(--Color-primary);
                border-radius: 7px;
                
                display: flex;
                justify-content: center;
                align-items: center;
                
                font-weight: 900;
                font-size: 14px;
                color: #FFFFFF;
                
                position: absolute;
                top: -12px;
                right: -0.8rem; 
            }
            }    
            svg{
                font-weight: 900;
                font-size: 22px;
                line-height: 25px; 
                color: #BDBDBD;
                cursor: pointer;
            }
            svg:hover{
                color: var(--Grey-100);
                cursor: pointer;
            }
        }
        @media (min-width: 900px){
            div{
                align-items: center;
                gap: 30px;
            }
        }
    }
    div+div{
        width: 100%;
        height: 80px;
        position: absolute;
        top: 0px;
        padding: 10px 16px;
    }
    @media (min-width: 900px){
        div+div{
            display: none;
        }
    }

`