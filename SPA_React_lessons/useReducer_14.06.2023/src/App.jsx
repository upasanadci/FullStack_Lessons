import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <nav>
        <Link to={"/"} style={{ marginRight: "15px" }}>
          Counter
        </Link>
        <Link to={"/signUp"}>SignUp</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
