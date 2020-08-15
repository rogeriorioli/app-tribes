import {createGlobalStyle} from 'styled-components'



const GlobalStyle = createGlobalStyle`
    *{
        margin:  0;
        padding:  0;
        outline: none;
        box-sizing: border-box ;
    }



    body {
        font : 400 14px Roboto, sans-serif;
        background: #f0f0f5;
        -webkit-font-smoothing : antialeased;
    }

`


export default GlobalStyle

