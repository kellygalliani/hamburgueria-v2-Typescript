import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    ul{
        display: flex;
        gap: 20px;
        height: fit-content;
        overflow-x: scroll;
        list-style: none;
        @media (min-width:979px) {
            gap: 20px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            overflow: hidden;
        }
        @media (min-width: 1200px){
            grid-template-columns: repeat(4, 1fr);
            
        }
    }
   

`