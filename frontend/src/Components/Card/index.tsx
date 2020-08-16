import React from 'react';

import { CardContainer } from './styles';

interface CardProps {
    title : string,
    content : string,
    image : string,
    data : string;
    author : string,
    avatar : string

}

const Card: React.FC<CardProps> = (props) => {
  return (
      <CardContainer>
          <div className="card-header">
            <div className="avatar">
                <img src={props.avatar} alt={props.author}/> 
            </div>
                <h3>{props.author}</h3>
                {props.children}
          </div>
          <div className="card-body">
              <figure>
                  <img src={props.image} srcSet={props.image} alt={props.title} loading="lazy"/>
              </figure>
              <div className="card-content">
                     <h2>{props.title}</h2>
                     <small>{props.data}</small>
                    <p>{props.content}</p> 
              </div>
          </div>
      </CardContainer>
  );
}

export default Card;