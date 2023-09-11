import "./style.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    username: "upasana",
    password: "12345",
  });

  const navigate = useNavigate();
  const { username, password } = data;
  const inputUserName = useRef();
  const inputPassword = useRef();

  const handleOnSubmit = () => {
    const userNameValue = inputUserName.current.value;
    const passwordvalue = inputPassword.current.value;
    if (userNameValue == username && passwordvalue == password) {
      navigate("/");
    }
  };

  return (
    <div className="loginForm">
      <h1>Login Page</h1>
      <form onSubmit={handleOnSubmit}>
        <label>
          FirstName:
          <input type="text" name="username" ref={inputUserName} />
        </label>
        <label>
          Password:
          <input type="password" name="password" ref={inputPassword} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;
