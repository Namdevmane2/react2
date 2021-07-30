import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Tag1 />
      <Tag2 />
      {/* <Tag3 /> */}
    </div>
  );
}

function Tag1() {
  return (
    <div className=" bg-success border m-2 p-2 text-center">
      <h1> Hello World </h1>
      <p style={{ color: "yellow", fontSize: "25px", border: "1px solid red" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt in
        maxime quod nam aspernatur dolorum error ut eligendi! Dolor, adipisci.
      </p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="tag2">
      <h1> Hello React </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex
        quod quidem exercitationem, est, rem molestiae praesentium reiciendis
        vel voluptate sit incidunt dolore, nostrum rerum facere. Ab dolor
        maiores soluta?{" "}
      </p>
    </div>
  );
}

export default App;
