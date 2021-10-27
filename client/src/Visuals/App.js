
import React from 'react';
import Home from './Containers/Pages/Home';
import './App.css';
import './Assets/css/app.settings.css';
import './Assets/css/app.core.css';
import './Assets/css/app.actions.css';
import './Assets/css/app.custom.css';
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
        <Route path='/ingresar'>
          <Login/>
        </Route>
        <Route path='/profesional'>
          <Dashboard/>
        </Route>
        <Route path='/registro'>
          <Register/>
        </Route>
        <Route path='/profesionales'>
          <Professionals/>
        </Route>
        <Route path='/soporte'>
          <Supports/>
        </Route>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;