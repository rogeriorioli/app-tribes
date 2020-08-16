import React from 'react';

import { ProfileContainer } from './styles';


interface UserProps {
    avatar : string,
    name : string,
    bio: string
}

const UserProfile: React.FC<UserProps> = ({avatar, bio, name}) => {
  return(
      <ProfileContainer>
            <img src={avatar} alt={name}/>
             <h3>{name}</h3>
            <p>{bio}</p>
      </ProfileContainer>
  );
}

export default UserProfile;