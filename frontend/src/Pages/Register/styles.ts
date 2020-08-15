import styled from 'styled-components';

export interface Bgprops {
    background : string
}

export const Container = styled.div<Bgprops>`
    background : url(${props => props.background});
    height : 100vh;
    width : 100vw;
    background-size : cover;
    background-position : center center;
    display : flex;
    align-items: center;
    justify-content: center;
    flex-wrap : wrap;
    .form-register {
        width : 70%;
    }
    .link {
        padding : 5% 0;
        color :white;
        a {
            color : white;
        }
    }
`;
