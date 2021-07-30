import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Tag1 } from "./pages/HelloWorld";
import { Tag2 } from "./pages/Hello";
function App() {
  return (
    <div className="App">
      <Tag1 />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

export default App;
