import logo from "../Image/logo.jpg";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();
  return (
    <div className="blogClass">
      <h1 className="headerTag">Blog Page</h1>
      <img src={logo}></img>
      <p></p>
      <button onClick={() => navigate("/Contact")}>Click me</button>
    </div>
  );
}

export default Blog;
