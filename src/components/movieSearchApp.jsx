import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import LoadingSpinner from "./LoadingSpinner";
import { searchMovies } from "../services/movieService";
import { searchActors } from "../services/actorService";
import { getGenres } from "../services/genreService";
import axiosInstance from "../services/apiConfig";

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genreList = await getGenres();
      setGenres(genreList);
    };
    fetchGenres();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const movieResults = await searchMovies(query);

      const actorResults = await searchActors(query);
      const actorMovies = [];
      for (const actor of actorResults) {
        const response = await axiosInstance.get(`/person/${actor.id}/movie_credits`);
        actorMovies.push(...response.data.cast);
      }

      const genreFound = genres.find((g) => g.name.toLowerCase() === query.toLowerCase());
      let genreMovies = [];
      if (genreFound) {
        const response = await axiosInstance.get("/discover/movie", {
          params: { with_genres: genreFound.id },
        });
        genreMovies = response.data.results;
      }

      const allMovies = [...movieResults, ...actorMovies, ...genreMovies];
      const uniqueMovies = Array.from(new Map(allMovies.map((m) => [m.id, m])).values());

      setMovies(uniqueMovies);
    } catch (error) {
      console.error("Error al buscar:", error);
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
