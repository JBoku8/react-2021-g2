import Welcome from "./Welcome";
import "./App.css";

function App() {
  // const message = <h1>Message Text</h1>;
  // const label = <label htmlFor="">Label Example</label>;

  return (
    <div className="App">
      <Welcome message="ReactJs" />
      <Welcome message="Webpack" />
      <Welcome message="BabelJs" />
      <Welcome message="NodeJs" />
      <Welcome message="npm && yarn" />
    </div>
  );
}

export default App;
