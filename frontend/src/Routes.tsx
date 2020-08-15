import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const src: React.FC = () => {
  return(
    <BrowserRouter>
    <Switch>
        {/* <Route path="/" exact component={Logon}   /> 
        <Route path="/register" component={Register}/>  
        <Route path="/profile" component={Profile} />      
         <Route path="/incidents/new" component={NewIncident} />  */}
    </Switch>
  </BrowserRouter>
  );
}

export default src;