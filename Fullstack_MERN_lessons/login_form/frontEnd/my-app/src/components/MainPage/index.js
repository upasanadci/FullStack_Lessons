import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MainPage() {
  const handleOnClick = () => {
    localStorage.removeItem("isLogin");
  };
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/mainpage")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data is:", data);
        setBackendData([...backendData, data]);
      });
  }, []);
  return (
    <div>
      <header>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <Link to="/" onClick={handleOnClick} className="button-class">
            LogOut
          </Link>
        </ul>
      </header>
      <main>
        {backendData.map((user, i) => (
          <div className="card">
            <p>{user.name}</p>
            <img src={user.image} style={{ width: 100, height: 100 }} />
          </div>
        ))}
      </main>
      <footer>
        <ul>
          <li>
            <a href="">Email</a>
          </li>
          <li>
            <a href="">Service-info</a>
          </li>
          <li>
            <a href="">Linkedin</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default MainPage;
