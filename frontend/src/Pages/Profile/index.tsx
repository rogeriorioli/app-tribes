import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from  'react-router-dom'
import Card from '../../Components/Card';
import api from '../../Services/api'
import {MdDelete} from 'react-icons/md'
import { Container } from './styles';
import UserProfile from '../../Components/UserProfile';

const Profile: React.FC = () => {
    const tokenId = useParams<any>();
    const history = useHistory();
    const date = new Date();
    const token = window.sessionStorage.getItem('token')

    const [getUser , setGetUser] =  useState<any[]>([]);
    const [getUserPost , setGetUserPost] =  useState<any[]>([]);


    useEffect(() =>{
        if(!token || token === ''){
            history.push('/login')
        }
    })
    
    useEffect(() => {
        api.get(`/user/${tokenId.id}`, {
            headers : {
                token : token
            }
            }).then(response => {
            setGetUser(response.data)
            })
        },[tokenId, token])

    useEffect(() => {
        api.get(`/userposts`, {
            headers : {
                token : token
            }
            }).then(response => {
            setGetUserPost(response.data)
            })
        },[token])


        const deletePost = async (id : any) => {
            await api.delete(`/deletepost/${id}`, {
                headers : {
                    token : token
                }
            })
            .then(success => {

                setGetUserPost(getUserPost.filter(getUserPost => getUserPost.id !== id))
            })
        }
  return (
      <Container>
          {getUser.map(user => <UserProfile key={user.name} name={user.name} avatar={user.avatar} bio={user.bio} /> )}
          <h2>Postagens Recentes</h2>
          {getUserPost.length <= 0 && <h2>Silencio é ouro </h2> }
          {getUserPost.map(post => {
              return(
                <Card key={post.id} 
                    title={post.title} 
                    content={post.content} 
                    image={post.feature_image} 
                    data={date.toLocaleString('pt-BR', post.created_at)} 
                    author={post.name} 
                    avatar={post.avatar}
                >
                <button type="button" onClick={() => deletePost(post.id)}>
                    <MdDelete color="red" size={20}/>
                </button>    
                </Card>    
              )
          })}
      </Container>
  );
}

export default Profile;