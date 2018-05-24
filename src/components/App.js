import React, { Component } from 'react';
import './App.css';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      zipcode: "",
      city: {},
      dates: [],
      selectedDate: null
    };
    this.url = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=";
    this.apikey = "&units=imperial&appid=c59493e7a8643f49446baf0d5ed9d646";
  }


  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bookmarker</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
