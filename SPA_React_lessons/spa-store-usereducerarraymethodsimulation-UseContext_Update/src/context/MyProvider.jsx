import React from "react";
import MyContext from "./MyContext";
import { useReducer } from "react";

const initialState = {
  dates: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PUSH":
      return { dates: [...state.dates, action.payload] };
    case "POP":
      return { dates: state.dates.slice(0, -1) };
    case "UNSHIFT":
      return { dates: [action.payload, ...state.dates] };
    case "SHIFT":
      return { dates: state.dates.slice(1) };
    default:
      return state;
  }
};

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onPush = () => {
    const newDate = new Date();
    dispatch({ type: "PUSH", payload: newDate });
  };

  const onPop = () => {
    dispatch({ type: "POP" });
  };

  const onUnshift = () => {
    const newDate = new Date();
    dispatch({ type: "UNSHIFT", payload: newDate });
  };

  const onShift = () => {
    dispatch({ type: "SHIFT" });
  };

  return (
    <MyContext.Provider value={{ state, onPush, onPop, onUnshift, onShift }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
