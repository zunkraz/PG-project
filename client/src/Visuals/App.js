
import React from 'react';
import Home from './Containers/Home';
import './App.css';
import './Assets/css/app.settings.css';
import './Assets/css/app.core.css';
import './Assets/css/app.actions.css';
import './Assets/css/app.custom.css';
import { Route, Switch  } from 'react-router';
import Footer from '..//Visuals/Components/FooterComponents/Footer'
import Nav from '../Visuals/Components/NavComponent/Nav'
import Login from './Containers/Login';
import Dashboard from './Containers/Dashboard';
import Register from './Containers/Register';
import Professionals from './Containers/Professionals';
import Supports from './Containers/Supports'
import ProfessionalDashboard from './Components/ProfessionalsComponents/ProfessionalDashboard';
import AdminPanel from "./Containers/AdminPanel";



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
        <Route exact path='/profesional/'>
          <ProfessionalDashboard/>
        </Route>
        <Route path='/profesional/:id'
                    render={({match})=><ProfessionalDashboard match={match}/>}
                />
        <Route path='/miperfil/'>
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
        <Route path='/admin'>
          <AdminPanel/>
        </Route>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;