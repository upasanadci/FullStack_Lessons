import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import ClearInput from "./component/ClearInput";
import Login from "./component/Login";
import PageNotFound from "./component/PageNotFound";
import Parent from "./component/parent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Parent />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="/clearinput" element={<ClearInput />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
