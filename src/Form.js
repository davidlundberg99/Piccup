import React from 'react'
import './App.css'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        location: "",
        gameDate: new Date().toISOString().substring(0, 10),
        gameTime: '12:00:00',
        numPlayers: 0,
        sportSelect: "",
        skillSelect: "",
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({[name]: value});
    }
  
    handleSubmit(event) {
      alert(this.state["skillSelect"] + " " + this.state["sportSelect"] + " Game Posted!\n" +
      this.state["gameDate"] + " at " + this.state["gameTime"] + '\n'+
      this.state["location"] + '\n'
      + this.state["numPlayers"] + " players");
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="App-form" onSubmit={this.handleSubmit}>
          <h2>Post a Game</h2>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange}/>
          <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.handleInputChange}/>
          <label>
            Date:
              <input type="date" name="gameDate" min={new Date().toISOString().substring(0, 10)} value={this.state.gameDate} onChange={this.handleInputChange}/>
          </label>
          <label>
            Time:
              <input type="time" name="gameTime" value={this.state.gameTime} onChange={this.handleInputChange}/>
          </label>
          <select name="sportSelect" value={this.state.sportSelect} onChange={this.handleInputChange}>
            <option value="" disabled selected>Select Sport</option>
            <option value="baseball">Baseball</option>
            <option value="basketball">Basketball</option>
            <option value="football">Football</option>
            <option value="soccer">Soccer</option>
            <option value="tennis">Tennis</option>
            <option value="volleyball">Volleyball</option>
          </select>
          <input type="number" name="numPlayers" placeholder="Number of players" value={this.state.numPlayers} onChange={this.handleInputChange}/>
          <select name="skillSelect" value={this.state.skillSelect} onChange={this.handleInputChange}>
            <option value="" disabled selected>Select Skill Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          <input type="submit" name="Submit" />
        </form>
      )
    }
  }

export default Form;
