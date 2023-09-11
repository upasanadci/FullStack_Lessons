import {
    Card,
    CardHeader,
    Avatar,
    CardMedia
} from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState, useEffect} from 'react'

function DisplayMovie(props) {
    const storedData = localStorage.getItem('favMovieList') ? JSON.parse(localStorage.getItem('favMovieList')): []

    const [movies, setMovies] = useState([])
    const [favMovie, setFavMovie] = useState(storedData)
    const [currentIndex, setCurrentIndex] = useState()
    useEffect(()=>{
        setMovies(props.movies)
    }, [props.movies])

    useEffect(()=>{
        saveFavMovie()
    }, [])
    // click fav movie 
    const favMovieSelect = (movie, index)=>{
        setCurrentIndex(index)
        // add movie in favMovie array list
        if(localStorage.getItem('favMovieList')) {
            setFavMovie([...JSON.parse(localStorage.getItem('favMovieList')), movie])
        }
        saveFavMovie()
    }
    
    const saveFavMovie = ()=>{
        // save it inside localstorage
        localStorage.setItem('favMovieList', JSON.stringify(favMovie))
    }
    // style for icon
    const heartIconStyle = {
        color: 'red',
        fontSize: '32px'
    }

    return (
        <>
        <h1>Searched movies</h1>
        <div className='display-movie'>
            {
                movies.length > 0 &&
                movies.map((movie, index)=>{
                    return (
                        <Card key={index} sx={{ maxWidth: 345, m: 4, p: 2, mx: 'auto',textAlign: 'center', width: '32%', position: 'relative' }}>
                        <CardHeader
                            avatar={
                                <Avatar src={movie.Poster} />
                            }
                            title={movie.Title}
                            subheader={movie.Year}
                        /> 
                        <CardMedia
                                component="img"
                                height="194"
                                image={movie.Poster}
                            />
                        {/* <FavoriteRoundedIcon sx={{color:'red', fontSize: '32px'}}/> */}
                        {/* <FavoriteRoundedIcon sx={(iconColor) ? heartIconStyle : {color:'green'}} onClick={()=>favMovieSelect(movie)}/>  */}
                        <FavoriteRoundedIcon sx={(currentIndex==index) ? heartIconStyle : {color:'green'}} onClick={()=>favMovieSelect(movie, index)}/>
                        <DeleteIcon sx={heartIconStyle}/>
                        </Card>
                    )
                })
                    
            } 
        </div>
        </>
     );
}

export default DisplayMovie;