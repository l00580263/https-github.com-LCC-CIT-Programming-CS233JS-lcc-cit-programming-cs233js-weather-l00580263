import React, { Component } from 'react';
import './App.css';
import ZipForm from './ZipForm';
import WeatherList from "./WeatherList";
import CurrentDay from "./CurrentDay";


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

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  render() 
  {
    return (
      <div className="App">
        <ZipForm submitZip={this.onFormSubmit}/>
        <WeatherList days={this.state.dates}/>
        <CurrentDay city={this.state.city} day={null}/>
      </div>
    );
  }



  onDayClick(index)
  {
    this.setState({selectedDate: index});
  }



  onFormSubmit(zipcode)
  {
    this.setState({zipcode: zipcode});

    fetch(`${this.url}${zipcode}${this.apikey}`).then(response => response.json()).then(
      (data) => {
        console.log("fetching");
        const {city, list: dates} = data;
        this.setState({zipcode, city, dates, selectedDate: null});
        console.log("got data");
    }).catch(error => {
        alert("problem");
      });
    }
}

export default App;
