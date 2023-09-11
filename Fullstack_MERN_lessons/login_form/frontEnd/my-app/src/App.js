import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Register from "./components/Register";
import Protected from "./components/Protected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route
        path="/mainpage"
        element={
          <Protected>
            <MainPage />
          </Protected>
        }></Route>
    </Routes>
  );
}

export default App;
