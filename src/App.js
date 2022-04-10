import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import {Switch, Route} from 'react-router-dom';
const App = ()=>{

  
  
  return(
    <div>
      <Switch>
        <Route path='/signup'>
          <SignUpForm/>
        </Route>
        <Route path='/'>
          <LogInForm/>
        </Route>
      </Switch>
    </div>
    
    
  )
}


export default App;