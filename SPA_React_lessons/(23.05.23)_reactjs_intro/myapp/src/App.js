import Test from './components/Test'
import './css/main.css'

function App() {
  const myName = 'arif'
  //jsx( JS + html)
  return <div>
    <h1 className="header1">my name {myName}</h1>
    <h1 className="header1">header 2</h1>
    <Menu data="javascript"/> 
    <Menu data="reactjs"/> 
    <Menu data="nodejs"/> 
    <Menu data="css"/> 
    <Test/>
    <Para/>
  </div>
}

// function components
function Menu(props) {
  console.log(props.data)
  //return 'I am menu 1'
  return <h2>{props.data}</h2>
}

function Para() {
  return <>
    <p>
    Lorem ipsum dolor sit amet.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nostrum?
    </p>
  </>
}


function Header() {
  return <h1>Header </h1>
}

function Image() {
  // how to display a picture
  return <image/>
}

export default App
