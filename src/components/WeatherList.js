import React, { Component } from 'react';
import WeatherListItem from "./WeatherListItem";

class WeatherList extends Component
{
    render()
    {
        const {days} = this.props;
        console.log("rendering list");
        return(
            <div className="weather-list flex-parent">
                {
                    days.map(
                        (day, index) => {
                            console.log("mapping " + new Date(day.dt * 1000));
                            return <WeatherListItem 
                            key={day.dt}
                            day={day}
                            index={index}
                            onDayClick={this.props.onDayClick}/>
                        }
                    )
                }

            </div>
        );
    }
}

export default WeatherList;