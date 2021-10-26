import React from 'react';
import Home from './Containers/Pages/Home';
import './App.css';
import { Route } from 'react-router';

// Footer for test

function App() {
  return (
    <Route path='/'>
      <Home/>
    </Route>
  );
}

export default App;
