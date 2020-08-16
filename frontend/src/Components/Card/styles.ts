import styled from 'styled-components';

export const CardContainer = styled.div`
    width : 100%;
    margin-bottom : 50px;
    border : solid 1px #dcdce2;
    background : #f0f0f5;
    .card-header {
        width : 100%;
            border-bottom : solid 1px #dcdce2;
            padding :2%;
           display : flex; 
           align-items: center;
           background : #fafafa;
     
            img {
                width : 50px;
                height : 50px;
                border-radius : 50%;
            }
            h3 {
                text-transform : uppercase;
                margin-left : 2%;
                color: rgb(23, 43, 77);
            } 
            button {
                position: relative;
                left: 45%;
                border: none;
                background: none;
            }   
    }
    figure {
        width : 100%;
        display : flex;
        justify-content : center;
        img {
            width : 100%;
            height : 400px;
            object-fit : cover;
        }
    }
    .card-content {
        padding : 5% 2%;
        background : #fafafa;
        border-top : solid 1px #dcdce2;
        h2 {
            color: rgb(23, 43, 77);
            margin-top: 10px;
            padding : 0;
            text-align: left;
        }
        small {
            color :#737373;
            margin-bottom : 4%;
            display : block;
        }
        p {
            color : #666;
        }
    }
  
`;
