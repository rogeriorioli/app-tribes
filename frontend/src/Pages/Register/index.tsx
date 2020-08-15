import React, {useState} from 'react';

import api from '../../Services/api';

import {Bgprops, Container} from './styles';
import bgskater from '../../assets/bgskater.jpeg';
import logologin from '../../assets/logologin.svg';
import Input from '../../Components/Input';

const Register: React.FC<Bgprops> = () => {
  return (
  <Container background={bgskater}>
      <img src={logologin} srcSet={logologin} alt="" loading="lazy"/>
        <form className="form-register">
            <Input name="name" label="Nome" />
            <Input name="email" label="E-mail" />
            <Input name="avatar" label="Avatar" />
            <Input name="password" type="password" label="Senha" />
            <button type="submit">Registrar</button>
        </form>

  </Container>
  );
}

export default Register;



// name,
// avatar,
// email,
// bio,
// password