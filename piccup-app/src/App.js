import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
        <form className="App-form">
          <h2>Post a Game</h2>
          <input type = "text" name="name" placeholder="Name"/>
          <input type = "text" name="location" placeholder="Location" />
          <label>
            Date: 
            <input type = "date" name="gameDate" defaultValue= {new Date().toISOString().substring(0,10)} min={new Date().toISOString().substring(0,10)}/>
          </label>
          <label>
            Time:
            <input type = "time" name="gameTime" defaultValue="12:00:00"/>
          </label>
          <select name="sportSelect">
          <option value="" disabled selected>Select Sport</option>
            <option value="baseball">Baseball</option>
            <option value="basketball">Basketball</option>
            <option value="football">Football</option>
            <option value="soccer">Soccer</option>
            <option value="tennis">Tennis</option>
            <option value= "volleyball">Volleyball</option>
          </select>
          <input type = "number" name="numPlayers" placeholder="Number of players"/>
          <select name="skillSelect">
            <option value="" disabled selected>Select Skill Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          <input type="submit" name="Submit"/>
        </form>
      </body>
    </div>
  );
}

export default App;
