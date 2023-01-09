import {useState , useEffect } from 'react';

import MovieCard from './Components/MovieCard';

import './App.css'
import SearchIcon from'./search.svg';


const API_URL = 'http://www.omdbapi.com?apiKey=d49111d8'

const movie1= {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}


const App = ()=>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    searchMovies( );
  }, []);


  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }



  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie)=>(
                  <MovieCard movie = {movie}/>
                ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }

    </div>
  )
} 

export default App
