import React from "react";
import "./App.css";
import Nav from "./components/Nav"
import School from "./components/School";
import Teachers from "./components/Teachers";

// App is a functional component
function App() {
  // here I add javascript
  const data = {
    className: "FBW11",
    school: "DCI",
    students: 15,
    teachers: ["Arif", "Vassilis", "Upasana"],
  };
  return (
    // after the return I add jsx = html + javascript
    <div className="App">
      <Nav/>
      <Welcome data={data} color="red" array={["camel", "iguana"]} />
      <Students data={data}/>
      <Language />
      <Teachers teachers = {data.teachers} />
      <School school = {data.school} students = {data.students}/>
    </div>
  );
}

export default App;

// In these examples we are creating all the components in the App.js file. This is not a common practice in react, usually every component has it's own file.

// Let's create some components

const Welcome = (props) => {
  console.log(props);
  console.log(props.data);
  return (
    <div>
      <h2>
        Hello Welcome to our Components. I am a functional component. I always
        start with a capital letter.
      </h2>
      <h3 style={{ color: props.color }}>
        {" "}
        Our class is {props.data.className}
      </h3>
      <hr />
    </div>
  );
};

// ClassComponent
class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsNum: 15,
    };
  }
  render() {
    return (
      <div>
        <h2>
          The number of students in this class are {this.state.studentsNum}
        </h2>
        <h2>
        The number of students in this class are {this.props.data.students}
        </h2>
        <hr />
      </div>
    );
  }
}

// Class component without a constructor and props
class Language extends React.Component {
  state = { language: "Javascript" };

  render() {
    return (
      <div>
        <h2>In Web development we are using {this.state.language}</h2>
        <hr />
      </div>
    );
  }
}
