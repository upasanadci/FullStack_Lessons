import SearchMovie from './components/SearchMovie';
import './Main.css';
import FavMovie from './components/FavMovie'

function App() {
  // js object css style
  const myStyle = {
    color: 'white',
    fontFamily: 'Sans-Serif',
    marginTop:'20px',
    padding: '20px',
    backgroundColor: 'green' 
  }
  return (
    // inline css by style={{CamelCase key}}
    <div style={{backgroundColor: 'tomato', margin: '10px', textAlign: 'center'}}>
         <SearchMovie/>
         <h1 style={myStyle}>JS Object CSS Sytle</h1>  
         <h2>Seperate CSS</h2>
         <h3 className='h3-test'>Css Class example</h3>
         <h4 id='h4ID'>CSS Id test example</h4>
         <FavMovie />
    </div>
  );
}

export default App;
