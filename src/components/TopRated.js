import { useState, useEffect } from "react"
import CardItem from "./CardItems"



const TopRated = () => {
    const [movies, setMovies] = useState([])
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=41514cf9c5004dbe47144dbf1928e39c&language=es-Es&page=1`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
                
            })
    }, [])

    return (
        <div>
            <div>
                {movies.map(movie => (
                    <CardItem key={movie.id}
                        title={movie.title}
                        img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        link={`/${movie.id}`} />
                ))}
            </div>
        </div>
    )
}

export default TopRated