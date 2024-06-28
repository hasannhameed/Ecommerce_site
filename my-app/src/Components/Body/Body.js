import React, { useState } from 'react';
import './Body.css';

const Body = ({ handleClick }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = () => {
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => {
        const transformedMovies = data.results.map(moviedata => {
          return {
            id: moviedata.episode_id,
            title: moviedata.title,
            openingText: moviedata.opening_crawl,
            releaseDate: moviedata.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  };

  return (
    <div className='container'>
      <section className="body--section">
        <h1>Music</h1>
      </section>
      <section className="body-section">
        <button onClick={fetchMovieHandler}>Click me</button>
        {/* Uncomment and use this section when you have cartElements and Cards component */}
        {/* {
          cartElements.map((item, index) => (
            <Cards key={index} item={item} handleClick={handleClick} />
          ))
        } */}
        {/* Optionally, you can also display the fetched movies */}
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.openingText}</p>
                <p>Release Date: {movie.releaseDate}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Body;
