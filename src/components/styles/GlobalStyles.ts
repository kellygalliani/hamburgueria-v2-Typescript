import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
   }
   button{
        cursor:pointer;
   } 
    body{
        font-family: 'Inter', sans-serif; 
    }
    :root{
        --Color-primary: #27AE60;
        --Color-primary-50: #93D7AF;
        --Color-secondary: #EB5757;
        --Grey-600: #333333;
        --Grey-300: #828282;
        --Grey-100: #E0E0E0;
        --Grey-0: #F5F5F5;
        --BackgroundModal: rgba(18, 18, 20, 0.5);
    }

`