import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

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
function Helloworld() {
  return (
    <div className="bg-success p-2 m-2 border text-light">
      <h1> Hello World</h1>
      <hr />
      <p> hjfcyJGDXVQYUDj jhfd HFD JHGJF jhj jgf huig kuhi jguyfe YFFE </p>
    </div>
  );
}

function Hello() {
  return <h1> Hello World</h1>;
}

function Hellouniverse() {
  return <h1> Hello universe </h1>;
}

export default App;
