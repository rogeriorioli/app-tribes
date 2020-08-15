import styled from 'styled-components';

export const ModalContainer = styled.div`
    background : rgba(0,0,0,.7);
    display : flex;
    align-items : center;
    justify-content : center;
    width : 100vw;
    height : 100vh;
    position : fixed;
    top: 0;
    z-index : 9;
    .modal {
      border-radius : 10px;
      background: linear-gradient(228.76deg, #2DEEF9 -34.42%, #E084F1 127.18%);    
      display : flex ;
      justify-content : center;
      align-items: center;
      font-size : 20px;
      text-align : center;
      color : white;
      font-weight : bold; 
      width : 70vw;
      min-height : 50vh;
    }
`;
