import {useState} from 'react'
import DisplayMovie from './DisplayMovie'
import {
 Button,
 TextField
} from '@mui/material'
function SearchMovie() {
    // state: stateName, setFunctionName
    const [input, setInput] = useState('No Movie')
    const [movies, setMovies] = useState([])
    const APILINK = 'https://www.omdbapi.com/?apikey=89459220&s='
    const getMovie = ()=>{
        fetch(APILINK+input)
        .then(response=> response.json())
        .then(data => {
            console.log(data.Search)
            setMovies(data.Search)
        })
    }

    return ( 
        <>
          <span>www.movie-search.com</span>
          <h1>Search a Movie</h1>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={e=>setInput(e.target.value)} sx={{fontSize: '20px', m: 2, p: 2, backgroundColor: 'white'}}/>
          <Button  variant="contained" color="success" sx={{fontSize: '20px', m: 2, p: 2}} onClick={getMovie}>Search</Button>
          <DisplayMovie movies={movies}/>
        </>

     );
}

export default SearchMovie;