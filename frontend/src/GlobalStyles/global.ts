import {createGlobalStyle} from 'styled-components'



const GlobalStyle = createGlobalStyle`

    #root .inner {
        width : 380px;
        height : 667px;
        margin : auto;
    }
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
    .default-button {
        width: 100%;
        background : orange;
        color : white;
        padding : 5%;
        border : none;
        border-radius : 10px;
        margin : 2% 0;
        text-transform: uppercase;
        &-login {
            background : #84bf67;
        }
    }
`


export default GlobalStyle

