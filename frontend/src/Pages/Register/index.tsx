import React, {useState} from 'react';
import {Link , useHistory} from 'react-router-dom'
import api from '../../Services/api';

import {Bgprops, Container} from './styles';
import bgskater from '../../assets/bgskater.jpeg';
import logologin from '../../assets/logologin.svg';
import Input from '../../Components/Input';
import Modal from '../../Components/Modal';

const Register: React.FC<Bgprops> = () => {

    const [name , setName] = useState<string>('');
    const [email , setEmail] = useState<string>('');
    const [avatar , setAvatar] = useState<string>('');
    const [password , setPassword] = useState<string>('');

    const [signTrust , setSignTrust] = useState<boolean>(false);
    const [message , setMessage] = useState<string>('');

    const history = useHistory();

         const sendFormLead = async (e : any) => {
           e.preventDefault(); 
           await api.post('/sigin', {
                name : name,
                password: password, 
                email : email,
                bio : '',
                avatar : avatar
            }).then(success => {
                console.log(success)
                setMessage('UAU ! SEU CADASTRO FOI REALIZADO');
                history.push(`/login`);
                
            })
              .catch(err => {
                setMessage(err.response.data.err === undefined ? 'error' : err.response.data.err );
                console.log(message)
                setSignTrust(true)
                console.log(signTrust);
              })  
         } 

         const closeModal = () => {
            setSignTrust(false)
            history.push('/login')
         }

  return (
   <> 
    <Container background={bgskater}>
        <img src={logologin} srcSet={logologin} alt="" loading="lazy"/>
          <form className="form-register" onSubmit={sendFormLead}>
              <Input name="name" label="Nome" placeholder="Seu Nome" onChange={e => setName(e.target.value)} autoComplete="off" required/>
              <Input name="email" label="E-mail" placeholder="seuemail@servidor.com.br" onChange={e => setEmail(e.target.value)} autoComplete="off" required/>
              <Input name="avatar" label="Avatar" placeholder="http://suaimagem.com/imagem.jpg" onChange={e => setAvatar(e.target.value)} autoComplete="off" required />
              <Input name="password" type="password" label="Senha" onChange={e => setPassword(e.target.value)} autoComplete="off" required/>
              <button className="default-button" type="submit">Registrar</button>
          </form>
          <div className="link">
              já tenho uma conta <Link to="/login" >FAZER LOGIN</Link>
          </div>
    </Container>
    {signTrust !== false ? 
        <Modal message={message}>
            <button className="default-button" type="button" onClick={closeModal}>Fazer login</button>
        </Modal>
        : <></>
      }
  </>
  );
}

export default Register;

