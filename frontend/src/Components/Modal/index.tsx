import React from 'react';

import { ModalContainer } from './styles';


interface ModalProps {
    message : string
}

const Modal: React.FC<ModalProps> = ({message, children}) => {
  return(
      <ModalContainer>
        <div className="modal">
            {message}
            {children}
        </div>

      </ModalContainer>    
  );
}

export default Modal;