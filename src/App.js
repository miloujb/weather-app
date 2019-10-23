import React from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Titles from "./Components/Titles/Titles";
import Weather from "./Components/Weather/Weather";

function App() {
  return (
    <div className="App">
      <Titles />
      <Form />
      <Weather />
    </div>
  );
}

export default App;
