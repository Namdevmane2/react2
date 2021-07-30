import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Tag1 } from "./pages/HelloWorld";
import { Tag2 } from "./pages/Hello";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/Page1">
        <h1>Page1</h1>
      </Link>
      <Link to="/Page2">
        <h1>Page2</h1>
      </Link>
      <Link to="/Page3">
        <h1>Page3</h1>
      </Link>

      <Link to="/hw">
        <h1> Outside page1</h1>
      </Link>

      <Link to="/hu">
        <h1> Outside page2</h1>
      </Link>

      <Link to="/Page3"> Page4</Link>
      <Route exact={true} path="/Page1" component={Page1} />
      <Route exact={true} path="/Page2" component={Page2} />
      <Route exact={true} path="/Page3" component={Page3} />
      <Route exact={true} path="/" component={Page1} />

      <Route exact="true" path="/hw" component={Tag1} />
      <Route exact="true" path="/hu" component={Tag2} />
    </BrowserRouter>
  );
}

function Page1() {
  return (
    <div>
      <h1> Page1 Goa </h1>
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est excepturi
        quo pariatur deleniti rerum quae amet iste, cumque harum voluptatem,
        libero labore explicabo assumenda suscipit incidunt corporis aut numquam
        voluptatum.
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1> Page2 Mumbai</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est excepturi
        quo pariatur deleniti rerum quae amet iste, cumque harum voluptatem,
        libero labore explicabo assumenda suscipit incidunt corporis aut numquam
        voluptatum.
      </p>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <h1> Page3 Nashik </h1>
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est excepturi
        quo pariatur deleniti rerum quae amet iste, cumque harum voluptatem,
        libero labore explicabo assumenda suscipit incidunt corporis aut numquam
        voluptatum.
      </p>
    </div>
  );
}

export default App;
