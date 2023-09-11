import {useState} from 'react'

function Count() {
    // useState() example
    // const count = 0
    // const [StateName, Func name to update state] = useState(initial data)
    const [count, setCount] =  useState(0) // number type data
    const [age, setAge] = useState(18)
    console.log(count)

    // handler function
    const clickHandle = ()=>{
        // updates count state
        setCount(count+1)
        setAge(35)
        // all your calculations and updates
    }
    return ( 
        <div>
            <button onClick={clickHandle}>Click me</button>
            <button onMouseOver={()=>{setAge(100)}}>Mouse over</button>
            <h3>{count}</h3>
            <h3>{age}</h3>
        </div>
     );
}

export default Count;