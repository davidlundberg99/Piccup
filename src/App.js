import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <p>
          Love to play sports but can’t commit to the schedule of an organized league?
          Piccup allows you to find same day, semi-organized, pickup sports in your community.
          Our site allows you to schedule and register for pickup sports
          game at public parks and facilities in your community.
        </p>
        <Form />
      </body>
    </div>
  );
}

export default App;
