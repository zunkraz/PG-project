import React from 'react';
import Home from './Containers/Pages/Home';
import './App.css';
import { Route, Switch  } from 'react-router';
import Footer from '..//Visuals/Components/FooterComponents/Footer'
import Nav from '../Visuals/Components/NavComponent/Nav'

// Footer for test

function App() {
  return (
    <div>
        <Nav/>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
