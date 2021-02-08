import React from 'react'
import './Movie.css';

const Movie = (props) => {

    const style = props.movies.length ? 'movie-list' : 'noStyle'

    return (
        <div className="movie-wrapper">
            <button onClick={props.getMovies}>Get Movies</button>
            <ul className={style}>
                {props.movies.map((movie) => {
                    return (
                        <li key={movie.movieId}>{movie.movieName}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Movie
