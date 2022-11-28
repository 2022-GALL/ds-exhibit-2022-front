import React, { useEffect, useState } from 'react';
import './App.css';
import Router from './components/Router';
import Hamburger from './components/Dropdown';
import axios from 'axios';
import customAxios from './customAxios';

function App() {
  // message 초기값 설정 (""로 설정)
  const [message, setMessage] = useState("");

  // function callback(data) {
  //   setMessage(data);
  // }

  // useEffect(함수, 배열) : 컴포넌트가 화면에 나타났을 때 자동 실행
  useEffect(() => {
    // fetch(url, options) : Http 요청 함수
    fetch("/api/test/hello")
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
    // customAxios('/test/hello', callback)
  }, [])

  return (
    <div className='App'>
      <p>서버에서 온 메세지: {message}</p>
      <Hamburger />
      <Router />
        
    </div>
  );

}

export default App;
