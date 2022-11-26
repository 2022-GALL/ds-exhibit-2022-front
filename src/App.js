import React, { useState, useEffect } from 'react';
import './App.css';
import Router from './components/Router';
import Hamburger from './components/Dropdown';

function App() {
  const [message, setMessage] = useState("ttt");
  useEffect(() => {
    fetch('/api/test')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  })
  return (
    <div className='App'>
      <Hamburger />
      <Router />
      
    </div>
  );
}

export default App;
