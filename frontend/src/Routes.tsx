import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}   /> 
        <Route path="/register"  component={Register}/>  
        <Route path="/login"  component={Login}   /> 
        {/* <Route path="/profile" component={Profile} />      
         <Route path="/incidents/new" component={NewIncident} />  */} 
      </Switch>
  </BrowserRouter>
  );
}

export default Routes;