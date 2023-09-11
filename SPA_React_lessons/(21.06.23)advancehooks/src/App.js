import logo from "./logo.svg";
import "./App.css";
import Parent from "./component/test/parent";
import AddValue from "./component/AddValue";
import HookExmp from "./component/HookExmp";

function App() {
  return (
    <div className="App">
      <Parent />
      <AddValue />
      <HookExmp />
    </div>
  );
}

export default App;
