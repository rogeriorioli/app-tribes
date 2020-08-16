import styled from 'styled-components';

export interface Bgprops {
    background : string
}

export const Container = styled.div<Bgprops>`
    background : url(${props => props.background});
    height : 100vh;
    width : 100%;
    background-size : cover;
    background-position : top left;
    display : flex;
    align-items: center;
    justify-content: center;
    flex-wrap : wrap;
    position : relative;
    &:before {
        background : rgba(0,0,0,.6);
        position : fixed;
        height : 100vh;
        width: 400px;
        top : 0;
        content : '';
    }
    img {
        position : relative ;
        z-index : 3;
    }
    .form-register {
        width : 70%;
        position : relative ;
        z-index : 3;
    }
    .link {
        padding : 5% 0;
        color :white;
        position : relative ;
        z-index : 3;
        a {
            color : white;
        }
    }
`;
