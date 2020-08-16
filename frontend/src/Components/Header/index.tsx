import React from 'react';

import { HeaderContainer } from './styles';
import logoHeader from '../../assets/logoheader.svg'
const Header: React.FC = () => {
  return(
      <HeaderContainer>
          <img src={logoHeader} alt="Tribes"/>
      </HeaderContainer>
  )
}

export default Header;