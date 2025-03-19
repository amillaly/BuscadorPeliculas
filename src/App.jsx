import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieSearchApp from "./components/movieSearchApp";

function App() {
  return (
    <div className="app-container">
      <MovieSearchApp />
    </div>
  );
}

export default App;



/*
import { useEffect, useState } from 'react';
import { searchMovies } from './services/movieService';
import { searchActors } from './services/actorService';
import { getGenres } from './services/genreService';

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);

  // Función para obtener datos
  const fetchData = async () => {
    const movieData = await searchMovies('Spider Man');
    const actorData = await searchActors('Will Smith');
    const genreData = await getGenres();

    setMovies(movieData);
    setActors(actorData);
    setGenres(genreData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>🎬 Consumo de API TMDB</h1>

      <h2>✅ Películas:</h2>
      {movies.map(movie => (
        <p key={movie.id}>{movie.title}</p>
      ))}

      <h2>✅ Actores:</h2>
      {actors.map(actor => (
        <p key={actor.id}>{actor.name}</p>
      ))}

      <h2>✅ Géneros:</h2>
      {genres.map(genre => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  );
}

export default App;
*/
