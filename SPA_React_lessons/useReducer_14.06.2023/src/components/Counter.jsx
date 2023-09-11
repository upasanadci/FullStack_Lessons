import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const reducer = (state, action) => {
  // takes 2 arguments state and action
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1 };
    case "DECREMENT":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

const Counter = () => {

  const initialArg = { number: 0 };

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialArg);

  // reducer is a function that I am creating and calling in order to update the state
  // initialArg or initialState is my initial state

  // dispatch a function that I am using inside my component when I want to call the reducer function. Dispatch takes always an argument(type)

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h2>Number : {state.number}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;
