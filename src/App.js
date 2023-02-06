import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    //BEM (change "App" to "app")
    <div className="app">
      {/* HEADER */}
      <Header />
      {/* {HOME} */}
      <Home />
    </div>
  );
}

export default App;
