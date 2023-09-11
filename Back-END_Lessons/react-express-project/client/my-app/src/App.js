import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:8000/user/1")
      .then((response) => response.json())
      .then((data) => {
        setBackendData([...backendData, data]);
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <h1>Hello from client</h1>
      {backendData &&
        backendData.map((user, i) => (
          <div className="container">
            <li key={i}>{user.id}</li>
            <li>{user.name}</li>
            <img src={user.image} />

            {/* optional chaining */}
          </div>
        ))}
      {/* {backendData && backendData.map((user, i) => <li key={i}>{user.id}</li>)} */}
    </div>
  );
}

export default App;
