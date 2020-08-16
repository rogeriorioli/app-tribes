import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import Input from '../../Components/Input';
import Modal from '../../Components/Modal';
import TextArea from '../../Components/TextArea';
import api from '../../Services/api';
import { Container } from './styles';

const NewPost: React.FC = () => {

    const token = window.sessionStorage.getItem('token');
    const history = useHistory();

    const [title, setTitle] = useState<string>('');
    const [content , setContent] = useState<string>('');
    const [feature_image , setImage] = useState<string>('');

    const [message, setMessage] = useState<string>('');
    const [postPub , setPostPub] = useState<boolean>(false);

    useEffect(() =>{
        if(!token || token === ''){
            history.push('/login')
        }
    })
    const SendPost = async (e : any) => {
        e.preventDefault();
        const data = {title, content, feature_image}
         await api.post('/addpost', data, {
            headers : {
                token : token
            }
        }).then(success => {
            setMessage(`Post ${title} publicado com sucesso!`)
            setPostPub(true);
        })
    }
  return (
      <>
      <Container>
          <h2>Adicionar Novo Post</h2>
          <form onSubmit={SendPost}>
              <Input label="Titulo" 
                        name="title" 
                        placeholder="Um titulo chamativo"
                         onChange={(e) => setTitle(e.target.value)}
                         required   
                        />
              <Input label="Imagem" 
                    name="title" 
                    placeholder="https://images.unsplash.com/photo-1595981235363-6cf7a4a34c76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    onChange={(e) => setImage(e.target.value)} 
                    required  
                    />
              <TextArea label="Conteudo" 
                        name="content" placeholder="escreva uma coisa bem legal "
                        onChange={(e) => setContent(e.target.value)}  
                        required  
                        />
              <button className="default-button default-button-login" type="submit">POSTAR</button>
          </form>
      </Container>
      {postPub !== false && 
        <Modal message={message}>
            <Link to="/feed" className="default-button">
                IR PARA O FEED
            </Link>
        </Modal>
      }
      </>
  );
}

export default NewPost;

