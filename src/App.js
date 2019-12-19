import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./components/style.css";


const apiKey = "ebe7ae9906179b8672040aca1eb56939";

class App extends React.Component {

    state = {
        tempurature: undefined,
        city: undefined,
        humidity: undefined,
        error: undefined,
        wind: undefined,
        description: undefined,
        icon: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const mainWeather = document.getElementsByClassName('outputDesc');
        const city = e.target.elements.city.value;
        const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${apiKey}&units=imperial`)
        const data = await apiCall.json();
        console.log(data);
      
        this.setState({
            tempurature: data.main.temp,
            city: data.name,
            humidity: data.main.humidity,
            description: data.weather[0].main,
            error: "",
            wind: data.wind.speed,
            icon: data.weather[0].icon
   
        }) 
    }

    render () {
      return (
        <div>
        <div className="container">
              <Titles />
              <Form getWeather={this.getWeather} />
              </div>
              <Weather 
                tempurature={Math.floor(this.state.tempurature)}
                city={this.state.city}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                wind = {this.state.wind}
                icon = {this.state.icon}
              />
        </div>
        
      )   
    }
  }

  export default App;