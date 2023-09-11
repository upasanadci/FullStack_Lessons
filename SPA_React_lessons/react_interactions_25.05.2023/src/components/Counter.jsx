import React from 'react'
import { useState } from 'react';


//When the state is changing we have : Re-rendering: React will re-render the component. Re-rendering means that React will update the virtual DOM to reflect the new state. React efficiently determines what parts of the component need to be updated and applies only those changes to the actual DOM.

const Counter = () => {
   // const [stateful variable, a function to update it] = useState(initial value)
    const [num , setNum] = useState(0);

    // let number = 0;

    const clickHandler = () => {
        // console.log("clickHandler")
        // number = number + 1
        // console.log(number)


        // change the num state value
         setNum(num+1);
        // other way to update the state
        // setNum((prevState=> prevState+1));
    }

  return (
    <div>
       <h1> State </h1>
       <hr />

    {/* <h2>Number : {number}</h2> */}
    <h2>State Num : {num}</h2>

       <button onClick={clickHandler}>increase</button>

    </div>

  )
}

export default Counter