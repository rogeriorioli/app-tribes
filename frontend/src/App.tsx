import React from 'react';
import GlobalStyle from './GlobalStyles/global';
import Routes from './Routes';

import styled from 'styled-components';

export const MasterContainer = styled.main`
    width: 400px;
    height: 100vh;
    margin: auto;
    box-sizing : content-box;
    position : relative;
`;





function App() {
  return (
    <MasterContainer>
      <Routes/>
      <GlobalStyle/>
    </MasterContainer>
  );
}

export default App;
