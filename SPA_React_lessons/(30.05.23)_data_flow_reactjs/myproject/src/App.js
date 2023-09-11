import {useState, useEffect} from 'react'
import Person from './components/Person';
import Count from './components/Count';

function App() {
  const [users, setUsers] = useState([])
  const login = false
  //useEffect will load without any effect/event
  //useEffect(function, dependency)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => {
      console.log(data)
      setUsers(data) // users updates here
    })
  }, []) // empty array means 1 time re-render
  return (
    <div>
      <h1>Small reactjs project Ideas</h1>
      {
        login ? 'You log in' : 'logout'
      }
{/* 
      {
        users ? <h2>users found</h2> : <h2>no users</h2>
      } */}


      {/* {
        users ? <ul>{users.map(user=> <li>{user.name}</li>)}</ul> : <h2>no users</h2>
      } */}

      {
        users.length > 0 && 
        <ul>
         {
            users.map((user, index)=> {
              return <li key={index}>{user.name}</li>
            })
         }
        </ul>
      }

      <Person/>
      <Count/>
      <Person/>
    </div>
  );
}

export default App;
