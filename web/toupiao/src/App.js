import React from 'react';
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
import Zhuce from './pages/Zhuce'
import AddToupiao from './pages/AddToupiao'
import TouDetail from './pages/TouDetail'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
         <Route path='/login' component={Login}></Route>
         <Route path='/zhuce' component={Zhuce}></Route>
         <Route path='/home' component={Home}></Route>
         <Route path='/addToupiao' component={AddToupiao}></Route>
         <Route path='/toudetail/:id' component={TouDetail}></Route>
         <Redirect from='/' to='/zhuce'></Redirect>
       </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
