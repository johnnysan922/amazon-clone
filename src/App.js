import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    //BEM (change "App" to "app")
    <Router>
      <div className="app">
        <Header />    {/* RENDERS REGARDLESS OF ROUTE*/}
        <Routes>
          {/* CHECKOUT PAGE ROUTE*/}
          <Route path='/checkout' element={
            <>
            <Checkout />
            </>
          }/>
          {/* DEFAULT ROUTE*/}
          <Route path='/' element={
            <>
            <Home />
            </>
          }/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
