import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Nav />
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
