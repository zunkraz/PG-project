
import React from 'react';
import Home from './Containers/Pages/Home';
import './App.css';
import { Route, Switch  } from 'react-router';
import Footer from '..//Visuals/Components/FooterComponents/Footer'
import Nav from '../Visuals/Components/NavComponent/Nav'
import Login from './Containers/Pages/Login';
import Dashboard from './Containers/Pages/Dashboard';
import Register from './Containers/Pages/Register';
import Professionals from './Containers/Pages/Professionals';
import Supports from './Containers/Pages/Supports'





function App() {
  return (
    <div>
        <Nav/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/professionals'>
          <Professionals/>
        </Route>
        <Route path='/supports'>
          <Supports/>
        </Route>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
