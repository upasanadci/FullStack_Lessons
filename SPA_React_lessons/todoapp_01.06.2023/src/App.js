import { useState } from "react";
import "./App.scss";
import AddTodo from "./component/AddTodo";
import DisplayTodos from "./component/DisplayTodos";
import HelpComponent from "./component/HelpComponent";
import Nav from "./component/Nav";

function App() {
  const [todos, setTodos] = useState([]);
  const [displayHelp , setDisplayHelp] = useState(false)
  // {id : 0 , title : "" , done : false}

  return (
    <div className="app">
      <Nav setDisplayHelp={setDisplayHelp}/>

      {displayHelp ? <HelpComponent/> :  <div className="todos-container">
        <AddTodo todos={todos} setTodos={setTodos} />
        <DisplayTodos todos={todos} setTodos={setTodos} />
      </div>}
     
    </div>
  );
}

export default App;
