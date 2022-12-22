import styled from "styled-components";

export const StyledCart = styled.div`
    width: 100%;
    height: 100%;
    max-height: 98vh;
    border-radius: 0 0 5px 5px;
    background-color: var(--Grey-0);

    & > .divEmpty{
        width: 100%;
        height: 158px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        
        span{
            color: var(--Grey-300);
            font-weight: 400;
            font-size: 14px;
        }
        
    }
    & > .div{
        
        width: 100%;
        min-height: 200px;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 20px;
        
        ul{
            width: 100%;
            min-height: auto;
            max-height: 300px;
            
            overflow-x: auto;
            
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            gap: 20px;
            padding-left: 20px;
            padding-right: 20px;
        }
        
        .divTotal{
            border-top: 2px solid var(--Grey-100);
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 25px;
            padding: 0 20px 20px 20px;

            > div{
                
                display: flex;
                justify-content: space-between;
                padding-top: 22px;

                h4{
                    font-weight: 600;
                    font-size: 14px;
                    letter-spacing: 1px;
                }
                p{
                    font-weight: 600;
                    font-size: 14px;
                    color: var(--Grey-300);
                }
            }
        } 

    }
    
    


`