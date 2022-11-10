import React, {useState, useEffect} from 'react'
import instance from './instance'
import './Row.css'

function Row({title, fetchUrl, isLargeRow}) {

    const base_url = "https://image.tmdb.org/t/p/original/"

    const [movies, setMovies] = useState([])
    useEffect(() => {
      async function fetchData() {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results);
      }
      fetchData()
    }, [])
    

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row__posters'>
            {movies.map((movie) => (
                <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name} />
            ))}
        </div>
    </div>
  )
}

export default Row