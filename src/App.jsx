import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
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
