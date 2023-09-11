import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const Number = () => {
  const { number, updateNum } = useContext(MyContext);

  return (
    <div>
      <h2>Number : {number}</h2>
      <button onClick={updateNum}>Update Number</button>
    </div>
  );
};

export default Number;
