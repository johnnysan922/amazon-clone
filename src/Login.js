import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();  //prevents page from refreshing

        //some fancy firebase login stuff...
    }
    const register = e => {
        e.preventDefault();

        //some fancy firebase register stuff...
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='	https://pngimg.com/uploads/amazon/amazon_PNG2.png' />
        </Link>

        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={
                    e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={
                        e => setPassword(e.target.value)} />

                <button className='login_signInButton'  type='submit' onClick={signIn}>
                    Sign In
                </button>
            </form>

            <p>
                By signing-in you agree to JOHNNY's Amazon's conditions of Use & Sale.
                Please see our Privacy Notice, our CookiesNotice and our Interest-Based Ads
            </p>

            <button className='login_registerButton' onClick={register}>
                Create your Amazon Account
            </button>
        </div>

    </div>
  )
}

export default Login