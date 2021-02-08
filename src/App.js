
import './App.css';
import { useState } from 'react';
import Movie from './Movie';

function App() {

  const [movies, setMovies] = useState([])

  const getMovies = () => {
    fetch(`http://localhost:2004/movie/allMovies`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data);
      })
  }

  return (
    <div className="App">
      <Movie movies={movies} getMovies={getMovies} />
    </div>
  );
}

export default App;
