import styled from 'styled-components'

export const StyledCardCart = styled.li`
    width: 100%;
    height: 80px;
    border-radius: 5px;
    padding-bottom:5px ;
    border-bottom: 1px solid var(--Grey-100);
    
    display: flex;
    flex-direction: row;

    & > div:nth-child(1){
        background-color: var(--Grey-100);
        width: 80px;
        min-width: 80px;
        max-height: 80px;
        border-radius: 5px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 55px;
            height: 55px;
            
            @media (max-width: 446px){
            width: 30px;
            height:30px;
        }
        }
        @media (max-width: 446px){
            width: 40px;
            min-width: 40px;
            max-height: 40px;
        }
    }
    & > div:nth-child(2){
        width: 80%;
        height: 100%;
        
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        margin-left: 20px;

        div:nth-child(1){
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            
            height: 100%;
            width: 100%;

            font-size: 90%;
            span{
                cursor: pointer;
            }
            
        }
        div:nth-child(2){
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            height: 60%;
            width: 80px;
            background-color: var(--Grey-100);
            border-radius: 5px;

            button{
                width: 30px;
                height: 100%;
                color: var(--Color-secondary);
                font-weight: 400;
                font-size: 22px;
                background-color: var(--Grey-100);
                border-radius: 5px;
            }
            span{
                font-weight: 400;
                font-size: 12px;
                height: 80%;
                width: 50%;

                display: flex;
                justify-content: center;
                align-items: center;
                
                background-color: var(--Grey-0);
            }
            
        }
    }



    
`
