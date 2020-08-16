import React from 'react';

import { ModalContainer } from './styles';

import {GoThumbsdown} from 'react-icons/go'

interface ModalProps {
    message : string,
}

const Modal: React.FC<ModalProps> = ({message, children}) => {
  return(
      <ModalContainer>
        <div className="modal">
            <GoThumbsdown size={50} color="#fff"/>
            <p>{message}</p>
            {children}
        </div>
      </ModalContainer>    
  );
}

export default Modal;