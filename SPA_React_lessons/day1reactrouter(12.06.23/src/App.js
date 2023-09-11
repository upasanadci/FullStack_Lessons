import { Route, Routes, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home page
            </Link>
          </li>
          <li>
            <NavLink to="/Contact" style={{ textDecoration: "none" }}>
              Contact page
            </NavLink>
          </li>
          <li>
            <Link to="/Blog" style={{ textDecoration: "none" }}>
              Blog page
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
