import {
    Card,
    CardHeader,
    Avatar,
    CardMedia
} from '@mui/material'
import {useState, useEffect} from 'react'

function FavMovie() {
    const storedData = localStorage.getItem('favMovieList') ? JSON.parse(localStorage.getItem('favMovieList')): []
    const [favMovie, setFavMovie] = useState(storedData) 
    useEffect(()=>{
        setFavMovie(storedData)
    }, []) 
    
    return (
        <>
        <h1>Fav Movie List</h1>
        <div className='display-movie'>
        {
            favMovie.length > 0 && // array has at least 1 object/item inside, not empty[]
            favMovie.map((movie, index)=>{
                return (
                    <Card key={index} sx={{ maxWidth: 345, m: 4, p: 2, mx: 'auto',textAlign: 'center' }}>
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
                     </Card>
                )
            })
                
        }
        </div> 
        </>
     );
}

export default FavMovie;