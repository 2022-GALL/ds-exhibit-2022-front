import React, { useEffect, useState } from 'react';
import './App.css';
import Router from './components/Router';
import Hamburger from './components/Dropdown';

function App() {
  // fetch(`http://3.36.144.189/api/test/hello`)
  // .then((response) => response.json())
  // .then((data) => console.log(data));

  return (
    <div className='App'>
      {/* <p>서버에서 온 메세지: {getData}</p> */}
      <Hamburger />
      <Router />
        
    </div>
  );

}

export default App;
