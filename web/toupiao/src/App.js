import React from 'react';
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'

import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
         <Route path='/login' component={Login}></Route>
         <Route path='/home' component={Home}></Route>

         <Redirect from='/' to='/login'></Redirect>
       </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
