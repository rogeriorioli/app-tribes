import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { MenuContainer } from './styles';
import {MdControlPoint , MdAccountCircle , MdHighlightOff, MdLibraryBooks} from 'react-icons/md'
import {Link} from 'react-router-dom'

const Menu: React.FC = () => {

    const token = window.sessionStorage.getItem('token')

    const history = useHistory();

    const logout = () => {
        history.push('/')
        sessionStorage.removeItem('token')
    }

    useEffect(() =>{
        if(!token || token === ''){
            history.push('/login')
        }
    })

  return(
      <MenuContainer>
          <ul>
            <li>
                  <Link to="/feed" title="Novo Post">
                        <MdLibraryBooks size={20} color="#172b4d"/>
                  </Link>
              </li>
              <li>
                  <Link to={`/profile/${token}`} title="Novo Post">
                        <MdAccountCircle size={20} color="#172b4d"/>
                  </Link>
              </li>
              <li>
                  <Link to="/newpost" title="Novo Post">
                        <MdControlPoint size={20} color="#172b4d"/>
                  </Link>
              </li>
              <li>
                  <button type="button" onClick={logout}>
                    <MdHighlightOff size={20} color="#172b4d"/>
                  </button>
              </li>
          </ul>
      </MenuContainer>
  );
}

export default Menu;