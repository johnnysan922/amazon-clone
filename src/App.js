import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    //BEM (change "App" to "app")
    <Router>
      <div className="app">
        {/* <Header />    RENDERS REGARDLESS OF ROUTE */}
        {/* but Login Page doesnt need header so not applicable*/}
        <Routes>
          {/* LOGIN PAGE ROUTE */}
          <Route path='/login' element={
            <>
            <Login />
            </>
          } 
          />
          {/* CHECKOUT PAGE ROUTE*/}
          <Route path='/checkout' element={
            <>
            <Header />
            <Checkout />
            </>
          }/>
          {/* DEFAULT ROUTE*/}
          <Route path='/' element={
            <>
            <Header />
            <Home />
            </>
          }/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
