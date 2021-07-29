import logo from "./logo.svg";
import "./App.css";

// JSX = javascript + html

function App() {
  // let id = 100;
  // let name = "sachin";
  // let title = " hello react ";
  // let list = ["delhi", "mumbai", "nagpur"];

  // data member
  // let title = "Event demo";

  // member function
  // let myfun = () => {
  //   alert("I am Click handler");
  // };

  let list = ["hello", "hello"];

  const addNewHello = () => {
    list.push("hello");
    console.log(list);
  };
  // view -> that is getting render in browser.
  // inside html you can access js variable

  return (
    <div className="App">
      <h1> Working with Events and List </h1>
    </div>
  );
}

export default App;
