import React from 'react';
import Home from './Containers/Home';
import './App.css';
import './Assets/css/app.settings.css';
import './Assets/css/app.core.css';
import './Assets/css/app.actions.css';
import './Assets/css/app.custom.css';
import { Route, Switch  } from 'react-router-dom';
import Footer from '../Visuals/Components/FooterComponents/Footer'
import Nav from '../Visuals/Components/NavComponent/Nav'
import LoginComponentsContainer from './Components/LoginComponents/LoginComponentsContainer';
import Dashboard from './Containers/Dashboard';
import Register from './Containers/Register';
import Professionals from './Containers/Professionals';
import Supports from './Containers/Supports'
import ProfessionalDashboard from './Components/ProfessionalsComponents/ProfessionalDashboard';
import AdminPanel from "./Containers/AdminPanel";
import Cart from './Components/Cart/Cart';
import PaymentsCart from './Components/Cart/PaymentsCart';
import Terms from './Containers/Terms';
import SalesPolicy from './Containers/SalesPolicy';





function App() {

  return (
    <div>
        <Nav />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/ingresar'>
          <LoginComponentsContainer/>
        </Route>
        <Route path='/profesionales/:username'>
          <ProfessionalDashboard/>
        </Route>        
        <Route path='/miperfil/:username'
          render={({match})=><Dashboard match={match}/>}>
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
        <Route path="/carrito">
          <Cart/>
        </Route>
        <Route path="/soporte">
          <Supports/>
        </Route>
        <Route path="/facturas">
          <PaymentsCart/>
          </Route>
        <Route path="/terminos-y-condiciones">
          <Terms/>
        </Route>
        <Route path="/politica-ventas">
          <SalesPolicy/>
        </Route>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
