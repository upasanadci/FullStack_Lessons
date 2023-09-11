import { Link } from "react-router-dom";
import "./style.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(data);
    fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("isLogin", true);
        if (data.success) {
          navigate("/MainPage");
        } else {
          localStorage.removeItem("isLogin");
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="form-container">
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter valid Email"
            ref={emailRef}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="enter valid password"
            ref={passwordRef}
          />
        </div>
        <div>
          <h2>Don't have an account?</h2>
          <button className="button-class">Sign In</button>
          <Link to="/register" className="button-class">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
