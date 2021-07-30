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
      <NavMenu />
      <Link to="/Page3"> Page4</Link>
      <Route exact={true} path="/Page1" component={Page1} />
      <Route exact={true} path="/Page2" component={Page2} />
      <Route exact={true} path="/Page3" component={Page3} />
      <Route exact={true} path="/" component={Page1} />

      <Route exact="true" path="/hw" component={Tag1} />
      <Route exact="true" path="/hu" component={Tag2} />
      <NavMenu />
    </BrowserRouter>
  );
}

function NavMenu() {
  return (
    <div>
      <Link to="/Page1">Page1</Link>
      <Link to="/Page2">Page2</Link>
      <Link to="/Page3">Page3</Link>

      <Link to="/hw">Outside page1</Link>

      <Link to="/hu">Outside page2</Link>
    </div>
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
