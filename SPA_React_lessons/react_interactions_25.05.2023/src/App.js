import './App.css';
import ArrayState from './components/ArrayState';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
 // Events Handling

function App() {
  
  const handleClick = (event) => {
      console.log("Clicked")
      console.log(event)
  }

  const clickAlert = () => {
    alert("third button clicked")
  }

  const numArray = [1,2,3,4,5] 

   const checkNumber = (num) => {
      console.log(num)
   }


  return (
    <div>
      <h1>
        Events
        <hr/>
      </h1>
      
      <button onClick={(event)=> handleClick(event)}>My first event handler</button>

      <button onClick={(e)=> console.log("inline clicked" , e)}>My first inline handling</button>

      <button onClick={clickAlert}>Handle event without arguments</button>

      <ul>
        {numArray.map((item,i)=> {
          return (
            <li key={i}>
              <button onClick={()=> checkNumber(item)}>{item}</button>
            </li>
          )
        })}
      </ul>
        <Counter/>
        <CounterClass/>
        <ArrayState/>
    </div>
  );
}

export default App;
