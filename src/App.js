import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

//key obtained from Stripe account
const promise = loadStripe('pk_test_51MZaVcIiuEXFqlMzKIhlm0wRMUCO6hCXrhwolygwjzBC4H6GA6XKwIvy2DH0kbGQfwbCt5BR1RIAh5hfjkNTofNV00QBXnhQ0e');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {   //HOOK
    //will only run once when the app compoenent loads...

    auth.onAuthStateChanged(authUser => {
      //console.log('The user is >>> ', authUser);

      if(authUser) {
        // the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])    // `[]` makes useEffect() run ONCE

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
          {/* PAYMENT PAGE ROUTE*/}
          <Route path='/payment' element={
            <>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </>
          }/>
          {/* CHECKOUT PAGE ROUTE*/}
          <Route path='/orders' element={
            <>
            <Header />
            <Orders />
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
