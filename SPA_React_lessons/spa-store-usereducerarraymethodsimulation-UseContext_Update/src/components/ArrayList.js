import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import ArrayEntry from "./ArrayEntry";

const ArrayList = () => {
  const { state } = useContext(MyContext);

  return (
    <div>
      {state.dates.map((date, index) => (
        <ArrayEntry key={index} date={date} />
      ))}
    </div>
  );
};

export default ArrayList;
