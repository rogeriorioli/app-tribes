import styled from 'styled-components';
import bgpost from '../../assets/bgpost.jpeg';
export const Container = styled.main`
    max-height : 700px;
    width : 100%;
    height : 100vh;
    padding : 60px 0;
    overflow : scroll;
    display: flex;
    align-items : center;
    justify-content: center;
    flex-wrap : wrap;
    background : url(${bgpost});
    background-size : cover;
    background-position : bottom center;
    h2 {
        text-align : center;
        padding : 4% 0; 
        color:  #a0122c;
    }
    form {
        width : 70%;
    }
`;
