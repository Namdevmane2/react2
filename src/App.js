import logo from "./logo.svg";
import "./App.css";

// JSX = javascript + html

function App() {
  //
  let title = " learning React";

  // stateless member
  let counter = 100;
  let increament = () => {
    // alert("I m Alert. ");
    counter += 1;
  };
  return (
    <div className="App">
      <h1 className="bg-primary text-light p-3"> stateless Ui </h1>
      {counter}
      <input type="button" value="increment" onclick="{increment}" />
    </div>
  );
}

export default App;
