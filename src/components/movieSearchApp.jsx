import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./searchBar";
import MovieList from "./movieList";
import LoadingSpinner from "./loadingSpinner";
import { searchMovies } from "../services/movieService";

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error("Error al buscar películas:", error);
    }
    setLoading(false);
  };

  return (
    <Container className="my-4">
      <h1 className="text-center">Buscador de Películas</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <LoadingSpinner /> : <MovieList movies={movies} />}
    </Container>
  );
};

export default MovieSearchApp;
