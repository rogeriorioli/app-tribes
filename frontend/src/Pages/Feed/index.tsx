import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import { Container } from './styles';
import Card from '../../Components/Card'

const Feed: React.FC = () => {

    const [posts, setPosts] = useState<any[]>([])
    const date = new Date();
    
    const token = window.sessionStorage.getItem('token')

    useEffect(() => {
        api.get('/posts', {
            headers : {
              token : token
            }
          }).then(response => {
              setPosts(response.data)
            })
        },[token])
        
        console.log(posts)

  return(
       <Container>
       {posts.map((post) => {
           return(
               <Card key={post.id} 
                     title={post.title} 
                     content={post.content} 
                     image={post.feature_image} 
                     data={date.toLocaleString('pt-BR', post.created_at)} 
                     author={post.name} 
                     avatar={post.avatar}
                />

           )
       })}

       </Container> 

  );
}

export default Feed;