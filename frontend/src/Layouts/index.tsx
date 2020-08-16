import React from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';



const Layouts: React.FC = ({children}) => {
  return(
      <>
        <Header/>
        {children}
        <Menu/>
      </>
  );
}

export default Layouts;