import logo from "../Image/logo3.jpg";
import "./style.css";

function Home() {
  return (
    <div className="homeClass">
      Home page
      <h1 className="homeHead">Home path</h1>
      <img src={logo} style={{ width: "600px", height: "400px" }}></img>
      <p>Today we are working of react router dom.</p>
    </div>
  );
}

export default Home;
