import styled from "styled-components";

export const StyledCart = styled.div`
    width: 100%;
    height: fit-content;
    border-radius: 0 0 5px 5px;
    background-color: var(--Grey-0);

    div:nth-child(1){
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
    


`