import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layouts from './Layouts';
import Feed from './Pages/Feed';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';






const Routes: React.FC = () => {
  return(
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login}   /> 
            <Route path="/register"  component={Register}/>  
            <Route path="/login"  component={Login}   /> 
            <Layouts>
            <Route path="/feed" component={Feed} />
            <Route path="/profile/:id" component={Profile} />
            </Layouts>
          </Switch>
      </BrowserRouter>
  );
}

export default Routes;