import React from "react";
import "./style.css";

class Weather extends React.Component {
   

  render() {

    let conditionIcon = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`


        return(
            <div>
                { this.props.tempurature && <p><div className="tempMain"><span className="outputTemp">{this.props.tempurature}</span><span className="tempLetter"></span></div></p> }

                { <p className="cityTwo">{this.props.city}</p> }
                
                { this.props.humidity && <p className="outputHumidity">Humidity <span className="humidityData">{this.props.humidity} %</span></p>}
                
                { this.props.description && <p className="condition">Conditions<span className="conditionData">{this.props.description}</span></p> }
                
                {this.props.icon && <img className="conditionIcon" src={conditionIcon} />} 

                { this.props.wind && <p className="windSpeed" >Wind Speed <span className="windSpeedData">{this.props.wind}<span className="mph">mph</span></span></p> }
                
                
                
    
            </div>
        )
    }
}

export default Weather;