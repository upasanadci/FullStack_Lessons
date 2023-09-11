import React from "react";
import { useState } from "react";
  // array state

const ArrayState = () => {
   // const [stateful variable, a function to update it] = useState(initial value)
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  const clickHandler = () => {
    // this will not because arr.push doesn't replace the original array
    // arr.push(arr[arr.length-1] + 1)
    // console.log(arr)
    // setArr(arr)

    console.log(arr[arr.length - 1] + 1);
    const newNumber = arr[arr.length - 1] + 1;

    setArr([...arr, newNumber]);
  };

  return (
    <div>
      <h1>Arrays and State</h1>
      <hr />
      <button onClick={clickHandler}>Add to the array</button>
      <ul>
        {arr.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ArrayState;
