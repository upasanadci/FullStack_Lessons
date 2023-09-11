import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Register() {
  const firstnameref = useRef();
  const lastnameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const data = {
      firstname: firstnameref.current.value,
      lastname: lastnameref.current.value,
      email: emailref.current.value,
      password: passwordref.current.value,
    };
    console.log("current values are:", data);
    fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/");
        }
      });
  };
  return (
    <div className="form-container">
      <div>
        <h1>Register</h1>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="firstname"
            ref={firstnameref}
            placeholder="enter your firstname..."
          />
        </div>
        <div>
          <input
            type="lastname"
            ref={lastnameref}
            placeholder="enter your lastname..."
          />
        </div>
        <div>
          <input
            type="email"
            ref={emailref}
            placeholder="enter your email..."
          />
        </div>
        <div>
          <input
            type="password"
            ref={passwordref}
            placeholder="enter your password..."
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
