import React, {useState} from 'react';
import {Link , useHistory} from 'react-router-dom'
import api from '../../Services/api';

import {Bgprops, Container} from './styles';
import blackCool from '../../assets/blackcool.jpeg';
import logologin from '../../assets/logologin.svg';
import Input from '../../Components/Input';
import Modal from '../../Components/Modal';

const Login: React.FC<Bgprops> = () => {

    const [email , setEmail] = useState<string>('');
    const [password , setPassword] = useState<string>('');
    const [signTrust , setSignTrust] = useState<boolean>(false);
    const [message , setMessage] = useState<string>('');

    const history = useHistory();

         const sendFormLead = async (e : any) => {
           e.preventDefault(); 
           await api.post('/login', {
                password: password, 
                email : email
            
            }).then(success => {
                console.log(success)
                setMessage('UAU ! SEU CADASTRO FOI REALIZADO');
                history.push(`/feed`);
                
            })
              .catch(err => {
                setMessage(err.response.data.err);
                console.log(message)
                setSignTrust(true)
                console.log(signTrust);
              })  
         } 

         const closeModal = () => {
            setSignTrust(false)
         }

  return (
   <> 
    <Container background={blackCool}>
        <img src={logologin} srcSet={logologin} alt="" loading="lazy"/>
          <form className="form-register" onSubmit={sendFormLead}>
              <Input name="email" label="E-mail" placeholder="seuemail@servidor.com.br" onChange={e => setEmail(e.target.value)} autoComplete="off" required/>
              <Input name="password" type="password" label="Senha" onChange={e => setPassword(e.target.value)} autoComplete="off" required/>
              <button className="default-button default-button-login" type="submit">Entrar</button>
          </form>
          <div className="link">
              Náo tenho uma conta <Link to="/register" >Registrar</Link>
          </div>
    </Container>
    {signTrust !== false ? 
        <Modal message={message}>
            <button className="default-button" type="button" onClick={closeModal}>Tentar Novamente</button>
        </Modal>
        : <></>
      }
  </>
  );
}

export default Login;