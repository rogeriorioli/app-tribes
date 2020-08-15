import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './Pages/Register';

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
    <Switch>
        <Route path="/register"  component={Register}/>  
        {/* <Route path="/" exact component={Logon}   /> 
        <Route path="/profile" component={Profile} />      
         <Route path="/incidents/new" component={NewIncident} />  */}
    </Switch>
  </BrowserRouter>
  );
}

export default Routes;