import styled from "styled-components";

export const StyledRegisterPage = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    section{
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content:center;
        align-items: center;
        div:nth-child(1){
            max-width: 939px;
            width: 95%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            img:nth-child(1){
                width: 229.74px;
                height: 35px;
            }
            div:nth-child(1){
                width: 100%; 
                display: flex;
                flex-direction: column;
                gap: 30px;
                
                div:nth-child(2){
                    border: 1px solid var(--Grey-100);
                    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    gap: 19px;
                    width: 100%;
                    max-width: 368px;
                    padding: 13px;
                    img:nth-child(1){
                        width: 60px;
                        height: 60px;
                    }
                    h1{
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 22px;
                    }
                }
                img:nth-child(3){
                        display: none;
                    }          
            }

            form{
                width: 100%;
                max-width: 500px;
                margin-top: 14px;
                padding: 16px 19px;

                background: #FFFFFF;
                border: 2px solid var(--Grey-0);
                box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                gap: 19px;
                div:nth-child(1){
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    h2{
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 24px;
                    }
                    .link{
                        color: var(--Grey-300);
                        font-weight: 500;
                        font-size: 14px;
                    }
                }
                div:nth-child(2){
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                div:nth-child(4){
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    p{
                        color: #999999;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 18px;
                        text-align: center;
                        width: 80%;
                        max-width: 327px;
                    }
                }
            }
        }
        @media (min-width: 528px){
            width: 526px;
        }
        @media (min-width: 800px){
            width: 939px;
            margin: 0 40px;
            max-width: 939px;
            display: flex;
            justify-content:center;
            align-items: center;
            div:nth-child(1){
                width: 100%;
                gap: 62px;
                display: flex;
                flex-direction: row;
                align-items: center;
                div:nth-child(1){
                    display: flex;
                    align-items: flex-start;
                    img:nth-child(3){
                        display: flex;
                    }
                }

            }    
        }
    }
    

`