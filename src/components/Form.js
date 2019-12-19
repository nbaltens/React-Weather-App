import React from "react";
import "./style.css"


class Form extends React.Component {


    render() {

      
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input className="input" type="text" name="city" placeholder="City"></input>
                    <button className="inputBtn">Get Weather</button>
                </form>
            </div>
        )
    }
}
export default Form;