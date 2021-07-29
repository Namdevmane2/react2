import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Helloworld } from ".src/pages/helloWorld";
function App() {
  return (
    <div className="App">
      <Helloworld />
      <Helloworld />

      <Hellouniverse />
    </div>
  );
}

// Tags :: Components :: Follow Pascalcase Convention
// <Helloworld />

function Hello() {
  return <h1> Hello World</h1>;
}

function Hellouniverse() {
  return <h1> Hello universe </h1>;
}

export default App;
