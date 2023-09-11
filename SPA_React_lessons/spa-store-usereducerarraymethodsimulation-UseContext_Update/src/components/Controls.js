import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const Controls = () => {
  const { onPush, onPop, onUnshift, onShift } = useContext(MyContext);
  return (
    <div>
      <button onClick={onPush}>Push</button>
      <button onClick={onPop}>Pop</button>
      <button onClick={onUnshift}>Unshift</button>
      <button onClick={onShift}>Shift</button>
    </div>
  );
};

export default Controls;
