import styled from 'styled-components'

export const StyledCardCart = styled.li`
    display: flex;
    width: 100%;
    height: 80px;

    .li__divImg{
        width:75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #E0E0E0;
        border-radius: 5px;
    }
    .li__divContent{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
    }
    .divContent__1{
        display: flex;
        flex-direction: column;
        gap: 20px;
        
    }
    .divContent__1 > h3{
        font-weight: 700;
        font-size: 14px;
        color: #333333;
    }
    .divContent__1 > p{
        font-weight: 400;
        font-size: 12px;
        color: #828282;
    }
    .li__divContent > span{
        font-weight: 500;
        font-size: 14px;
        color: #BDBDBD;
        cursor: pointer;
    }
`
