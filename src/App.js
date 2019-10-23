import React from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Titles from "./Components/Titles/Titles";
import Weather from "./Components/Weather/Weather";

const API_key = "a02be84938b6870f46fba5c56f9c1026";

class App extends React.Component {
  getWeather = async e => {
    e.preventDefault();
    const callAPI = await fetch(
      `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}&units=metric`
    );
    const data = await callAPI.json();
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
