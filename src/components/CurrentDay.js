import React, { Component } from 'react';

class CurrentDay extends Component
{
    degToCardinal(deg)
    {
        let cardinal;
        let magic = deg / 45;
        const directions = ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West", "North"];
        magic = Math.round(magic);
        return directions[magic];
    }
    


    getDayOfWeek(index)
    {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[index];
    }



    render()
    {
        const today = new Date(this.props.day.dt * 1000);
        const todayWeather = this.props.day;
        const dayOfWeek = this.getDayOfWeek(today.getDay());
        const city = this.props.city.name;
        const description = todayWeather.weather[0].description;
        const icon = todayWeather.weather[0].icon;
        const morning = todayWeather.temp.morn;
        const day = todayWeather.temp.day;
        const evening = todayWeather.temp.eve;
        const night = todayWeather.temp.night;
        const humid = todayWeather.humidity;
        const wind = todayWeather.speed;
        const windDir = todayWeather.deg;
        const windCardinal = this.degToCardinal(windDir);



        return (
            <div className='current-day'>
                <h1 className='day-header'> {dayOfWeek} in {city} </h1>
                <div className='weather'>
                <p>
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
                    {description}
                </p>
                </div>
                <div className="details flex-parent">
                <div className="temperature-breakdown">
                    <p>Morning Temperature: {morning}&deg;f</p>
                    <p>Day Temperature: {day}&deg;f</p>
                    <p>Evening Temperature: {evening}&deg;f</p>
                    <p>Night Temperature: {night}&deg;f</p>
                    <br/>
                    <p> It's {humid}% (?) humid, and {wind} mph(?) windy going {windCardinal} way.</p>
                </div>
                </div>
            </div>
        );
    }
}

export default CurrentDay;