import React from "react";
import { useReducer } from "react";

const signUpReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SAVE_USER":
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        users: [...state.users, action.payload],
      };
     case "DELETE_USER": 
        const filtered = state.users.filter((item)=> item.id !== action.payload) 
        return {...state , users : filtered}
    default:
      return state;
  }
};

const SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    users: [],
  };

  const [state, dispatch] = useReducer(signUpReducer, initialState);

  console.log(state);
  const inputChangeHandler = (e) => {
    // if (e.target.name == "name") {
    //   dispatch({ type: "SET_NAME", payload: e.target.value });
    // } else if (e.target.name == "email") {
    //   dispatch({ type: "SET_EMAIL", payload: e.target.value });
    // } else {
    //   dispatch({ type: "SET_PASSWORD", payload: e.target.value });
    // }
    dispatch({
      type: `SET_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SAVE_USER",
      payload: {
        name: state.name,
        email: state.email,
        password: state.password,
        id: state.users.length + 1,
      },
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={inputChangeHandler}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={inputChangeHandler}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={inputChangeHandler}
          />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
      <ul>
        {state.users.map((item) => {
          return (
            <li key={item.id}>
              <p>Name: {item.name}</p>
              <p>Email:{item.email}</p>
              <button onClick={()=>dispatch({type : "DELETE_USER" , payload : item.id})}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SignUp;
